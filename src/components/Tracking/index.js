import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Webcam from "react-webcam";
import { createResourceRequest } from "../../actions/resource";
import { connect } from "react-redux";
import FaceApi from "../../faceUtils";
const faceapi = new FaceApi();
// import { loadModels, getFullFaceDescription, createMatcher } from '../api/face';

// Import face profile
createResourceRequest;
const WIDTH = 420;
const HEIGHT = 420;
const inputSize = 160;

class VideoInput extends Component {
  constructor(props) {
    super(props);
    this.webcam = React.createRef();
    this.state = {
      fullDesc: null,
      detections: null,
      descriptors: null,
      faceMatcher: null,
      match: null,
      facingMode: null
    };
  }

  componentWillMount = async () => {
    await faceapi.loadModels();
    this.setInputDevice();
  };

  setInputDevice = () => {
    navigator.mediaDevices.enumerateDevices().then(async devices => {
      let inputDevice = await devices.filter(
        device => device.kind === "videoinput"
      );
      if (inputDevice.length < 2) {
        await this.setState({
          facingMode: "user"
        });
      } else {
        await this.setState({
          facingMode: {
            exact: "environment"
          }
        });
      }
      this.startCapture();
    });
  };

  startCapture = () => {
    this.interval = setInterval(() => {
      this.capture();
    }, 1500);
  };

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0)
      byteString = atob(dataURI.split(",")[1]);
    else byteString = unescape(dataURI.split(",")[1]);

    // separate out the mime component
    var mimeString = dataURI
      .split(",")[0]
      .split(":")[1]
      .split(";")[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {
      type: mimeString
    });
  }
  capture = async () => {
    if (!!this.webcam.current) {
      let img = this.webcam.current.getScreenshot();

      let fullDesc = await faceapi.getFullFaceDescription(
        this.webcam.current.getScreenshot(),
        inputSize
      );
      let descriptors, detections;
      if (!!fullDesc) {
        detections = fullDesc.map(fd => fd.detection);
        descriptors = fullDesc.map(fd => Array.from(fd.descriptor));
        console.log("TCL: capture -> descriptors", descriptors);
      }
      
      //use file formdata
      // var blob = await this.dataURItoBlob(img);
      // console.log("TCL: VideoInput -> capture -> blob", blob);

      let values = {
        // img: blob,
        // hasFile: true,
        descriptors: descriptors,
        type: 1
      };
      const pm = new Promise((resolve, reject) => {
        this.props.createResourceRequest(
          "tracking",
          "api/descriptor/tracking",
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
          self.setState({
            match: rs.match,
             detections: detections
          });
        },
        err => {
          let errors = err.response.data.errors;
          // throw new SubmissionError(errors);
        }
      );
    }
  };

  render() {
    const { detections, match, facingMode } = this.state;
    let videoConstraints = null;
    let camera = "";
    if (!!facingMode) {
      videoConstraints = {
        width: WIDTH,
        height: HEIGHT,
        facingMode: facingMode
      };
      if (facingMode === "user") {
        camera = "Trước";
      } else {
        camera = "Sau";
      }
    }

    let drawBox = null;
    if (!!detections) {
      drawBox = detections.map((detection, i) => {
        console.log("TCL: detection", detection);

        let _H = detection._box._height;
        let _W = detection._box._width;
        let _X = detection._box._x;
        let _Y = detection._box._y;
        return (
          <div key={i}>
            <div
              style={{
                position: "absolute",
                border: "solid",
                borderColor: "blue",
                height: _H,
                width: _W,
                transform: `translate(${_X}px,${_Y}px)`
              }}
            >
              {" "}
              {!!match && !!match[i] ? (
                <p
                  style={{
                    backgroundColor: "blue",
                    border: "solid",
                    borderColor: "blue",
                    width: _W,
                    marginTop: 0,
                    color: "#fff",
                    transform: `translate(-3px,${_H}px)`
                  }}
                >
                  {" "}
                  {match[i]._label}{" "}
                </p>
              ) : null}{" "}
            </div>{" "}
          </div>
        );
      });
    }

    return (
      <div
        className="Camera"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <p> Camera: {camera} </p>{" "}
        <div
          style={{
            width: WIDTH,
            height: HEIGHT
          }}
        >
          <div
            style={{
              position: "relative",
              width: WIDTH
            }}
          >
            {" "}
            {!!videoConstraints ? (
              <div
                style={{
                  position: "absolute"
                }}
              >
                <Webcam
                  audio={false}
                  width={WIDTH}
                  height={HEIGHT}
                  ref={this.webcam}
                  screenshotFormat="image/jpeg"
                  videoConstraints={videoConstraints}
                />{" "}
              </div>
            ) : null}{" "}
            {!!drawBox ? drawBox : null}{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}
VideoInput = connect(
  null,
  {
    createResourceRequest
  }
)(VideoInput);
export default VideoInput;
