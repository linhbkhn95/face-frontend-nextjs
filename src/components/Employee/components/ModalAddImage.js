import React from "react";
import {
  Modal,
  Button,
  Form,
  Select,
  Input,
  Row,
  Col,
  Icon,
  Upload,
  Divider,
  Typography,
  message
} from "antd";
import { connect } from "react-redux";
import { createResourceRequest } from "../../../actions/resource";
const { Title } = Typography;

const { Option } = Select;

class ModalAdd extends React.Component {
  state = {
    confirmLoading: false,
    previewVisible: false,
    previewImage: "",
    fileList: []
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
    this.setState({
      fileList: []
    });
    this.props.close();
  };

  handleChange = ({ fileList }) => {
    console.log("TCL: PicturesWall -> fileList", fileList);
    this.setState({
      fileList
    });
  };
  process = () => {
    //  var createResourceRequest =
    console.log("valuesssss=====>>", values);
    var values = {
      hasFile: true,
      username: this.props.record.username,
      img: this.state.fileList.map(i => i.originFileObj)
    };
    const pm = new Promise((resolve, reject) => {
      this.props.createResourceRequest(
        "detection",
        "/api/descriptor/dectected",

        values,
        resolve,
        reject
      );
    });
    let self = this;
    return pm.then(
      rs => {
        console.log("TCL: process -> rs", rs);
        // self.props.dispatch(reset("IntroduceHost"));

        self.setState({
          rs
        });
        message.success('Thêm ảnh thành công');
        self.props.close();
      },
      err => {
        let errors = err.response.data.errors;
        self.setState({
          err_msg: errors
        });
        message.error(errors);

        console.log("TCL: process -> errors", errors);
        // throw new SubmissionError(errors);
      }
    );
  };
  previewOutPut(url) {
    console.log("TCL: previewOutPut");
    this.setState({
      previewImage: url,
      previewVisible: true
    });
  }
  render() {
    const { visible, confirmLoading, ModalText, record = {} } = this.props;
    const { getFieldDecorator } = this.props.form;
    const {
      previewVisible,
      previewImage,
      fileList,
      previewVisibleOutPut
    } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text"> Upload </div>{" "}
      </div>
    );
    let title = (
      <div>
        Thêm ảnh nhân viên:
        <strong>
          {" "}
          {record.fullname} - {record.username}{" "}
        </strong>{" "}
      </div>
    );
    return (
      <div>
        <Modal
          title={title}
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          footer={
            <React.Fragment>
              <Button onClick={this.handleCancel} htmlType="submit">
                Hủy{" "}
              </Button>{" "}
              <Button
                onClick={this.process}
                type="primary"
                icon="user-add"
                htmlType="submit"
              >
                Thêm{" "}
              </Button>{" "}
            </React.Fragment>
          }
        >
          <Form
            labelCol={{
              span: 6
            }}
            wrapperCol={{
              span: 12
            }}
            onSubmit={this.process}
          >
            <Row>
              <Col lg={24} md={24}>
                {" "}
                {/* <Title level={4}> Dữ liệu cần nhận diện </Title> */}{" "}
                <div
                  style={{
                    padding: "50px",
                    display: "flex",
                    justifyContent: "center"
                  }}
                  className="clearfix"
                >
                  <Upload
                    listType="picture-card"
                    fileList={fileList}
                    // showUploadList={false}
                    supportServerRender={true}
                    action={"check-healthy"}
                    multiple={true}
                    // customRequest={() => {
                    //   console.log('upload')
                    // }}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                  >
                    {fileList.length >= 8 ? null : uploadButton}{" "}
                  </Upload>{" "}
                  <Modal
                    visible={previewVisible}
                    footer={null}
                    onCancel={this.handleCancel}
                  >
                    <img
                      alt="example"
                      style={{
                        width: "100%"
                      }}
                      src={previewImage}
                    />{" "}
                  </Modal>{" "}
                </div>{" "}
              </Col>{" "}
            </Row>{" "}
            <Row>
              <Col
                style={{
                  color: "red"
                }}
                md="24"
              >
                {" "}
                {this.state.err_msg}{" "}
              </Col>{" "}
            </Row>{" "}
          </Form>{" "}
        </Modal>{" "}
      </div>
    );
  }
}
ModalAdd = Form.create({
  name: "AddUser"
})(ModalAdd);

export default connect(
  null,
  {
    createResourceRequest
  }
)(ModalAdd);
