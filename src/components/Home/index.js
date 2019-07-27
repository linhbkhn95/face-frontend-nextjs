import react from "react";
import { connect } from "react-redux";
import { getCurrentUserRequest } from "../../actions/auth";
import { Row, Avatar } from "antd";
import ButtonClickTest from "../Hooks/components/ButtonClickTest";
import ListFriend from "../Hooks/components/ListFriend";
import "./index.less";
class Index extends React.Component {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    return {
      pageProps
    };
  }
  componentDidMount() {
    this.props.getCurrentUserRequest();
  }
  render() {
    const { user = {} } = this.props.auth ? this.props.auth : {};
    return (
      <React.Fragment>
        <Row gutter={16}> Trang chu </Row>
        <Row style={{ display: "flex", justifyContent: "center" }} gutter={16}>
          <Avatar
            size={96}
            style={{
              marginRight: "10px",
              cursor: "pointer"
            }}
            src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p160x160/60593297_1017753475089748_7729311351624957952_n.jpg?_nc_cat=105&_nc_oc=AQkfihUvAE4yJAaZSxsM8R7HVIErbPHPzWaf5mQMiBJsgK1dxAxsNNjMjd03S7IWfhs&_nc_ht=scontent.fhan5-6.fna&oh=7b732a62514bb8bb918d97fa730bc41e&oe=5D5C2D06"
          />
        </Row>
        <Row
          className="text-name"
          style={{ display: "flex", justifyContent: "center" }}
          gutter={16}
        >
          Xin chào {user.fullname}{" "}
        </Row>

        {/* <ButtonClickTest />
                 <ListFriend /> */}
      </React.Fragment>
    );
  }
}

export default connect(
  state => {
    return { auth: state.getIn(["auth"]) };
  },
  {
    getCurrentUserRequest
  }
)(Index);
