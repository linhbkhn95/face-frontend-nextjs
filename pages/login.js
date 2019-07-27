import React from "react";
import { connect } from "react-redux";

import LoginForm from "components/Login";
import Head from "next/head";

class Login extends React.Component {
  //   static async getInitialProps(props) {
  //     const { store } = props.ctx;

  //     if (!store.getState().placeholderData) {
  //       store.dispatch(loadData());
  //     }
  //   }

  render() {
    return (
      <div>
        <Head>
          <title>Đăng nhập</title>
        </Head>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
