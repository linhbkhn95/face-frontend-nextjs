import React from "react";
import { Modal, Button, Form, Select, Input } from "antd";
import { connect } from "react-redux";
import { createResourceRequest } from "../../../actions/resource";

const { Option } = Select;

class ModalAdd extends React.Component {
  state = {
    confirmLoading: false
  };

  handleOk = () => {
    this.props.access();
    // setTimeout(() => {
    //   this.setState({
    //     visible: false,
    //     confirmLoading: false
    //   });
    // }, 2000);
  };

  handleCancel = () => {
    this.props.close();
  };

  handleSelectChange = value => {
    console.log(value);
    this.props.form.setFieldsValue({
      note: `Hi, ${value === "male" ? "man" : "lady"}!`
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        const pm = new Promise((resolve, reject) => {
          this.props.createResourceRequest(
            "addUser",
            "/api/user",
            values,
            resolve,
            reject
          );
        });
        let self = this;
        pm.then(
          data => {
            // window.location.href = data;

            console.log("create success", data);
            self.props.access();
            // self.props.dispatch(reset("Login"));
          },
          err => {
            console.log("err: ", err.response);
            if (err && err.response) {
              if ((err.response && err.response.status) === 401) {
                self.props.form.setFields({
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
              self.props.form.setFields(errors);
            } else {
              self.props.form.setFields({
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

  render() {
    const { visible, confirmLoading, ModalText } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <div>
        <Modal
          title="Thêm nhân viên"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          footer={
            <React.Fragment>
              <Button onClick={this.handleCancel} htmlType="submit">
                Hủy
              </Button>
              <Button
                onClick={this.handleSubmit}
                type="primary"
                icon="user-add"
                htmlType="submit"
              >
                Thêm
              </Button>
            </React.Fragment>
          }
        >
          <Form
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 12 }}
            onSubmit={this.handleSubmit}
          >
            <Form.Item label="Tên nhân viên">
              {getFieldDecorator("fullname", {
                rules: [{ required: true, message: "Hãy nhập tên nhân viên" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Email">
              {getFieldDecorator("email", {
                rules: [{ required: true, message: "Hãy nhập email" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Tên đăng nhập">
              {getFieldDecorator("username", {
                rules: [{ required: true, message: "Hãy nhập tên đăng nhập" }]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Địa chỉ">
              {getFieldDecorator("address", {
                // rules: [{ required: true, message: "Hãy nhập địa chỉ" }]
              })(<Input />)}
            </Form.Item>
            {/* <Form.Item label="Giới tính">
              {getFieldDecorator("gender", {
                rules: [
                  { required: true, message: "Please select your gender!" }
                ]
              })(
                <Select
                  placeholder="Hãy chọn giới tính cho nhân viên"
                  onChange={this.handleSelectChange}
                >
                  <Option value="male">Nam</Option>
                  <Option value="female">Nữ</Option>
                </Select>
              )}
            </Form.Item> */}
            {/* <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>
        </Modal>
      </div>
    );
  }
}
ModalAdd = Form.create({ name: "AddUser" })(ModalAdd);

export default connect(
  null,
  { createResourceRequest }
)(ModalAdd);
