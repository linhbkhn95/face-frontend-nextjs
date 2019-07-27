import React from "react";
import { Layout, Menu, Icon, Avatar, Popover, Badge } from "antd";
import "./index.less";
import { connect } from "react-redux";
import Router from "next/router";
import Link from "next/link";

import { logoutRequest } from "../../actions/auth";
import { getCurrentUserRequest } from "../../actions/auth";
import InputSearch from "./components/InputSearch";
const { Header, Sider, Content, Footer } = Layout;
const dataMenu = [
  {
    path: "/",
    menuName: "Trang chủ",
    icon: "home"
  },
  {
    path: "/employee",
    menuName: "Nhân viên",
    icon: "team",
    
  },
  {
    path: "/detection",
    menuName: "Nhận diện khuôn mặt",
    icon: "eye"
  },
  {
    path: "/tracking",
    menuName: "Giám sát",
    icon: "deployment-unit"
  },
  // {
  //   path: "/train",
  //   menuName: "Đào tạo ",
  //   icon: "deployment-unit"
  // },
  {
    path: "/account",
    menuName: "Thông tin cá nhân",
    icon: "profile"
  },
  {
    path: "/sercurity",
    menuName: "Bảo mật",
    icon: "lock"
  },
  
];
const text = (
  <span>
    <Avatar
      size={64}
      style={{
        marginRight: "10px",
        cursor: "pointer"
      }}
      src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p160x160/60593297_1017753475089748_7729311351624957952_n.jpg?_nc_cat=105&_nc_oc=AQkfihUvAE4yJAaZSxsM8R7HVIErbPHPzWaf5mQMiBJsgK1dxAxsNNjMjd03S7IWfhs&_nc_ht=scontent.fhan5-6.fna&oh=7b732a62514bb8bb918d97fa730bc41e&oe=5D5C2D06"
    />
    Trịnh Đức Bảo Linh 
  </span>
);

class MenuAccount extends React.PureComponent {
  render() {
    const { logoutRequest = () => {} } = this.props;
    return (
      <Menu>
        <Menu.Item key="1">
          <Icon type="info-circle" /> Thông tin cá nhân 
        </Menu.Item> 
        <Menu.Item key="2">
          <Icon type="unlock" /> Thay đổi mật khẩu 
        </Menu.Item> 
        <Menu.Item onClick={logoutRequest} key="3">
          <Icon type="logout" /> Đăng xuât 
        </Menu.Item> 
      </Menu>
    );
  }
}
MenuAccount = connect(
  null,
  {
    logoutRequest
  }
)(MenuAccount);
class LayoutWeb extends React.Component {
  state = {
    collapsed: false
  };
  componentDidMount() {
    this.props.getCurrentUserRequest();
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  redirectPage = url => {
    Router.push(url);
  };
  render() {
    const { auth } = this.props;

    if (auth.isAuthenticated)
      return (
        <div className="layout-web">
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
               
              {!this.state.collapsed ? (
                <img
                  className="logo"
                  // style={{ width: "50px" }}
                  src="https://giaohangtietkiem.vn/wp-content/themes/giaohangtk/images/logo.png"
                />
              ) : (
                <div
                  style={{
                    width: "50px"
                  }}
                  className="logo"
                />
              )} 
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
                 
                {dataMenu.map((menu, index) => {
                  return (
                    <Menu.Item key={index}>
                      <Icon type={menu.icon} /> <span> {menu.menuName} </span> 
                      <Link href={menu.path}>
                        <a />
                      </Link> 
                    </Menu.Item>
                  );
                })} 
              </Menu> 
            </Sider> 
            <Layout>
              <Header
                style={{
                  background: "#fff",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingRight: "22px"
                }}
              >
                {/* <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                   
                  }}
                > */}
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                    onClick={this.toggle}
                  /> 
                  <InputSearch />
                {/* </div>  */}
                <div>
                  <Badge offset={15} count={5}>
                    <Icon
                      style={{
                        fontSize: "24px",
                        marginRight: "5px"
                      }}
                      type="bell"
                    />
                  </Badge> 
                  <Popover
                    placement="bottomRight"
                    title={text}
                    content={<MenuAccount />}
                    trigger="click"
                  >
                    <Avatar
                      style={{
                        marginLeft: "10px",
                        cursor: "pointer"
                      }}
                      src="https://scontent.fhan5-6.fna.fbcdn.net/v/t1.0-1/p160x160/60593297_1017753475089748_7729311351624957952_n.jpg?_nc_cat=105&_nc_oc=AQkfihUvAE4yJAaZSxsM8R7HVIErbPHPzWaf5mQMiBJsgK1dxAxsNNjMjd03S7IWfhs&_nc_ht=scontent.fhan5-6.fna&oh=7b732a62514bb8bb918d97fa730bc41e&oe=5D5C2D06"
                    />
                  </Popover> 
                </div> 
              </Header> 
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  background: "#fff",
                  minHeight: 280
                }}
              >
                {this.props.children} 
              </Content> 
            </Layout> 
          </Layout> 
        </div>
      );
    return (
      <Layout
        style={{
          background: "white"
        }}
        className="layout"
      >
        <Header className="header-customs">
          <img
            className="logo"
            src="https://giaohangtietkiem.vn/wp-content/themes/giaohangtk/images/logo.png"
          />
        </Header> 
        <Content
          style={{
            padding: "0 50px"
          }}
        >
          {this.props.children} 
        </Content> 
      </Layout>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.getIn(["auth"])
  };
};
export default connect(
  mapStateToProps,
  {
    getCurrentUserRequest
  }
)(LayoutWeb);
