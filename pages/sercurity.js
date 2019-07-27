import React from "react";
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
          <title>Bao mat</title>
        </Head>
        Bao mat
      </div>
    );
  }
}

export default Index