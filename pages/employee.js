import React from "react";
import Head from "next/head";
import ListEmployee from '../src/components/Employee'
class Index extends React.Component {
  static async getInitialProps(props) {
    const { store } = props.ctx;
    // store.dispatch(getCurrentUserRequest())
  }

  render() {

    return (
      <div>
        <Head>
          <title> Danh sach nhan vien </title>
        </Head>
       

        <ListEmployee />
      </div>
    );
  }
}

export default Index;
