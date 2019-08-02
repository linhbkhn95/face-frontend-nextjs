import React from "react";
import Head from "next/head";
import Tracking from "../src/components/Tracking";
class Index extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx;
    // store.dispatch(getCurrentUserRequest())
  }

  render() {

    return (
      <div>
        <Head>
          <title>Giám sát  </title>
        </Head>

        <Tracking />
      </div>
    );
  }
}

export default Index;
