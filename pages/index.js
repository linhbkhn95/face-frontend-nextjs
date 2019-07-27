import React from "react";
import IndexPage from "../src/components/Home";
import { getCurrentUserRequest } from "../src/actions/auth";
import Head from "next/head";

class Index extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx;
    // store.dispatch(getCurrentUserRequest())
  }

  render() {
    const { placeholderData } = this.props;

    return (
      <div>
        <Head>
          <title>Trang chủ </title>
        </Head>
        <IndexPage />
      </div>
    );
  }
}

export default Index;
