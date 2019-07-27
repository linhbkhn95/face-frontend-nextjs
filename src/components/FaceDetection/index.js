import React from "react";
import {
  Upload,
  Icon,
  message,
  Modal,
  Button,
  Row,
  Col,
  Divider,
  Typography
} from "antd";
import "./index.less";
import { connect } from "react-redux";

import { createResourceRequest } from "../../actions/resource";
const { Title } = Typography;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class PicturesWall extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: []
  };

  handleCancel = () =>
    this.setState({
      previewVisible: false
    });

  handlePreview = async file => {
    // if (!file.url && !file.preview) {
    //   file.preview = await getBase64(file.originFileObj);
    // }
    file.preview = await getBase64(file.originFileObj);
    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true
    });
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
      img: this.state.fileList.map(i => i.originFileObj)
    };
    const pm = new Promise((resolve, reject) => {
      this.props.createResourceRequest(
        "descriptor/prediction",
        "detection",
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
        // self.props.close();
        self.setState({ rs });
      },
      err => {
        let errors = err.response.data.errors;
        // throw new SubmissionError(errors);
      }
    );
  };
  previewOutPut(url) {
    console.log("TCL: previewOutPut");
    this.setState({ previewImage: url, previewVisible: true });
  }
  render() {
    const {
      previewVisible,
      previewImage,
      fileList,
      previewVisibleOutPut
    } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text"> Upload </div>
      </div>
    );
    return (
      <React.Fragment>
        <Row>
          <Col lg={11} md={12}>
            <Title level={4}> Dữ liệu cần nhận diện </Title>
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
                {fileList.length >= 8 ? null : uploadButton}
              </Upload>
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
                />
              </Modal>
            </div>
          </Col>
          <Col ld={2} md={2}>
            <Divider
              style={{
                height: "25.9em"
              }}
              type="vertical"
            />
          </Col>
          <Col style={{ Height: "100vh", overflowY: "auto" }} md={11} md={11}>
            <Title level={4}> Kết quả nhận diện </Title>
            {this.state.rs && this.state.rs.length
              ? this.state.rs.map(i => {
                  let url = `url("${i}")`;
                  return (
                    <Col
                      onClick={this.previewOutPut.bind(this, i)}
                      key={i}
                      md={24}
                      style={{
                        backgroundImage: url,

                        height: "469px",
                        borderRadius: "8px",
                        display: "inline-block",
                        width: "100%",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat"
                      }}
                    >
                      {/* <Modal
                        visible={previewVisibleOutPut}
                        footer={null}
                        onCancel={this.handleCancel}
                      >
                        <img
                          alt="example"
                          style={{
                            width: "100%"
                          }}
                          src={i}
                        />
                      </Modal> */}
                      {/* <img
                        style={{
                          width: "100%",
                          height: "100%",
                          maxHeight: "240px"
                        }}
                        src={i}
                      /> */}
                    </Col>
                  );
                })
              : null}
          </Col>
        </Row>
        <Col>
          <Divider />
        </Col>
        <Row
          style={{
            padding: "50px",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Button onClick={this.process} type="primary" icon={"eye"}>
            Xử lý
          </Button>
        </Row>
      </React.Fragment>
    );
  }
}
PicturesWall = connect(
  null,
  { createResourceRequest }
)(PicturesWall);
export default PicturesWall;
