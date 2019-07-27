import React from "react";
import Head from "next/head";
import FaceDetection from "../src/components/FaceDetection";
class Index extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx;
    // store.dispatch(getCurrentUserRequest())
  }

  render() {

    return (
      <div>
        <Head>
          <title> Nhận dạng khuôn mặt </title>
        </Head>

        <FaceDetection />
      </div>
    );
  }
}

export default Index;
