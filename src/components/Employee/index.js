import { Table, Row, Col, Avatar, Icon, Typography, Button } from "antd";
import { getResourceRequest } from "../../actions/resource";
// import reqwest from "reqwest";
import { connect } from "react-redux";
import ModalAdd from "./components/ModalAddUser";
import ModalImage from "./components/ModalAddImage";
const { Title } = Typography;

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name
  })
};
class ListEmployee extends React.Component {
  state = {
    data: [],
    pagination: {
      pageSize: 15
    },
    loading: false,
    showModal: {}
  };
  getColumn() {
    const columns = [
      {
        title: "Avatar",
        dataIndex: "avatar",
        sorter: true,
        render: avatar => <Avatar src={avatar} />,
        width: "20%"
      },
      {
        title: "Tên đăng nhâp",
        dataIndex: "username"
      },
      {
        title: "Họ tên",
        dataIndex: "fullname",
        sorter: true,
        render: fullname => `${fullname}`,
        width: "20%"
      },

      {
        title: "Email",
        dataIndex: "email"
        // filters: [
        //   {
        //     text: "Nam",
        //     value: "male"
        //   },
        //   {
        //     text: "Nữ",
        //     value: "female"
        //   }
        // ],
        // width: "20%"
      },
      {
        // title: "Action",
        key: "operation",
        fixed: "right",
        width: 100,
        render: () => (
          <React.Fragment>
            <a style={{}} href="javascript:;">
              <Icon type="edit" /> Sửa
            </a>
            {/* <a  style={{clear:"both"}} href="javascript:;">
                                  <Icon type="file-image" /> Thêm ảnh
                                </a> */}
          </React.Fragment>
        )
      },
      {
        // title: "Action",
        key: "operation2",
        fixed: "right",
        width: 200,
        render: () => (
          <React.Fragment>
            <a
              style={{
                clear: "both"
              }}
              href="javascript:;"
            >
              <Icon type="file-image" /> Thêm ảnh
            </a>
          </React.Fragment>
        )
      }
    ];
    return columns;
  }
  componentDidMount() {
    this.fetch();
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = {
      ...this.state.pagination
    };
    pager.current = pagination.current;
    this.setState({
      pagination: pager
    });
    // this.fetch({
    //   results: pagination.pageSize,
    //   page: pagination.current,
    //   sortField: sorter.field,
    //   sortOrder: sorter.order,
    //   ...filters
    // });
  };

  fetch = async (params = {}) => {
    console.log("params:", this.state.pagination);
    this.setState({
      loading: true
    });
    const pm = new Promise((resolve, reject) => {
      this.props.getResourceRequest("employeers", `/api/user?limit=15`, resolve, reject);
    });
    let self = this;
    return pm.then(
      rs => {
        console.log("TCL: process -> rs", rs);
        // self.props.dispatch(reset("IntroduceHost"));
        // self.props.close();
        self.setState({
          data: rs.dt,
          pagination: {
            total: rs.total
          },
          loading: false
        });
      },
      err => {
        let errors = err.response.data.errors;
        // throw new SubmissionError(errors);
      }
    );
    this.setState({
      loading: false
    });
    // reqwest({
    //   url: "https://randomuser.me/api",
    //   method: "get",
    //   data: {
    //     results: 10,
    //     ...params
    //   },
    //   type: "json"
    // }).then(data => {
    //   const pagination = {
    //     ...this.state.pagination
    //   };
    //   // Read total count from server
    //   // pagination.total = data.totalCount;
    //   pagination.total = 200;
    //   this.setState({
    //     loading: false,
    //     data: data.results,
    //     pagination
    //   });
    // });
  };
  access(type) {
    console.log("TCL: access -> access");
    this.setState({
      showModal: {
        [type]: false
      }
    });
    if (type === "employee") this.fetch();
  }
  close(type) {
    this.setState({
      showModal: {
        [type]: false
      }
    });
  }
  showModalAdd(type,record) {
  console.log("TCL: showModalAdd -> record", record)
    
    this.setState({
      record,
      showModal: {
        [type]: true
      }
    });
  }
  addImage(type) {
    this.setState({
      showModal: {
        [type]: true
      }
    });
    console.log("TCL: addImage -> addImage");
  }
  render() {
    return (
      <Row>
        <Title level={4}> Danh sách nhân viên </Title>
        <Row>
          <Button
            onClick={this.showModalAdd.bind(this, "employee")}
            type="primary"
            icon="user-add"
          >
            Thêm
          </Button>
          <Button
            style={{
              marginLeft: "5px"
            }}
            type="danger"
            icon="delete"
          >
            Xóa
          </Button>
        </Row>
        <Table
          rowSelection={rowSelection}
          columns={[
            {
              title: "Avatar",
              dataIndex: "avatar",
              sorter: true,
              render: avatar => <Avatar src={avatar} />,
              width: "20%"
            },
            {
              title: "Tên đăng nhâp",
              dataIndex: "username"
            },
            {
              title: "Họ tên",
              dataIndex: "fullname",
              sorter: true,
              render: fullname => `${fullname}`,
              width: "20%"
            },

            {
              title: "Email",
              dataIndex: "email"
              // filters: [
              //   {
              //     text: "Nam",
              //     value: "male"
              //   },
              //   {
              //     text: "Nữ",
              //     value: "female"
              //   }
              // ],
              // width: "20%"
            },
            {
              // title: "Action",
              key: "operation",
              fixed: "right",
              width: 100,
              render: () => (
                <React.Fragment>
                  <a style={{}} href="javascript:;">
                    <Icon type="edit" /> Sửa
                  </a>
                  {/* <a  style={{clear:"both"}} href="javascript:;">
                                            <Icon type="file-image" /> Thêm ảnh
                                          </a> */}
                </React.Fragment>
              )
            },
            {
              // title: "Action",
              key: "operation2",
              fixed: "right",
              width: 200,
              render: (text,record) => (
                <React.Fragment>
                  <a
                      onClick={this.showModalAdd.bind(this, "image",record)}
                      type="primary"
                    style={{
                      clear: "both"
                    }}
                    href="javascript:;"
                  >
                    <Icon type="file-image" /> Thêm ảnh
                  </a>
                </React.Fragment>
              )
            }
          ]}
          rowKey={record => record.id}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
        <ModalAdd
          visible={this.state.showModal["employee"]}
          access={this.access.bind(this, "employee")}
          close={this.close.bind(this, "employee")}
        />
        <ModalImage
          record={this.state.record}
          visible={this.state.showModal["image"]}
          access={this.access.bind(this, "image")}
          close={this.close.bind(this, "image")}
        />
      </Row>
    );
  }
}
ListEmployee = connect(
  null,
  {
    getResourceRequest
  }
)(ListEmployee);
export default ListEmployee;
