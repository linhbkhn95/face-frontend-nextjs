import React from "react";
import Head from "next/head";

class Account extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx;
    // store.dispatch(getCurrentUserRequest())
  }

  render() {
    const { placeholderData } = this.props;

    return (
      <div>
        <Head>
          <title>Tai khoan </title>
        </Head>
        Thong tin ca nhan
      </div>
    );
  }
}

export default Account