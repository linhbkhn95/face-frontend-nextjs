import react from "react";
import { connect } from "react-redux";
import { Form, Icon, Input, Col, Row, Button, Checkbox } from "antd";
import "./index.less";
import { loginRequest } from "../../actions/auth";
import { bindActionCreators } from "redux";
import Router from "next/router";
class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);

        // server validate
        // if (values.username === 'linhtd') {
        //   console.log('valid: ');
        //   this.props.form.setFields({
        //     username: {
        //       value: values.user,
        //       errors: [new Error('forbid ha')],
        //     },
        //   });
        // }

        const pm = new Promise((resolve, reject) => {
          this.props.loginRequest(values, resolve, reject);
        });
        let self = this;
        pm.then(
          data => {
            // window.location.href = data;

            console.log("login success", data);
            // self.props.dispatch(reset("Login"));
          },
          err => {
            console.log("err: ", err.response);
            if (err && err.response) {
              if ((err.response && err.response.status) === 401) {
                this.props.form.setFields({
                  username: {
                    errors: [new Error("Something was wrong")]
                  }
                });
              }
              let { errors = {} } = err.response.data;
              console.log("errors:11 ", errors);
              errors = Object.keys(errors).reduce(function(item, key) {
                return {
                  [key]: {
                    errors: [new Error(errors[key])]
                  }
                };
              }, {});
              this.props.form.setFields(errors);
            } else {
              this.props.form.setFields({
                username: {
                  errors: [new Error("Something was wrong")]
                }
              });
            }
          }
        );
      }
    });
  };
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    return {
      pageProps
    };
  }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      Router.push("/");
    }
  }
  render() {
    const { getFieldDecorator = () => {} } = this.props.form;
    return (
      <Row gutter={16}>
        <div className="page-login">
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {" "}
              {getFieldDecorator("username", {
                rules: [
                  {
                    required: true,
                    message: "Tên đăng nhập không được để trống!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="user"
                      style={{
                        color: "rgba(0,0,0,.25)"
                      }}
                    />
                  }
                  placeholder="Tên đăng nhâp"
                />
              )}{" "}
            </Form.Item>{" "}
            <Form.Item>
              {" "}
              {getFieldDecorator("password", {
                rules: [
                  {
                    required: true,
                    message: "Mật khẩu  không được để trống!"
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon
                      type="lock"
                      style={{
                        color: "rgba(0,0,0,.25)"
                      }}
                    />
                  }
                  type="password"
                  placeholder="Nhập mật khẩu của bạn"
                />
              )}{" "}
            </Form.Item>{" "}
            <Form.Item>
              {" "}
              {getFieldDecorator("remember", {
                valuePropName: "checked",
                initialValue: true
              })(<Checkbox> Nhớ mật khẩu </Checkbox>)}{" "}
              <a className="login-form-forgot" href="">
                Quên mật khẩu{" "}
              </a>{" "}
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Đăng nhập{" "}
              </Button>
              Chưa có tài khoản <a href=""> Đăng ký ngay! </a>{" "}
            </Form.Item>{" "}
          </Form>{" "}
        </div>{" "}

      </Row>
    );
  }
}

const WrapLogin = Form.create({
  name: "normal_login"
})(LoginForm);
const mapStateToProps = state => {
  return {
    auth: state.getIn(["auth"])
  };
};
export default connect(
  mapStateToProps,
  {
    loginRequest
  }
)(WrapLogin);
