import { Table, Row, Col,Typography } from "antd";
// import reqwest from "reqwest";
const { Title } = Typography;

const columns = [
  {
    title: "Họ tên",
    dataIndex: "name",
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: "20%"
  },
  {
    title: "Giới tính",
    dataIndex: "gender",
    filters: [
      {
        text: "Nam",
        value: "male"
      },
      {
        text: "Nữ",
        value: "female"
      }
    ],
    width: "20%"
  },
  {
    title: "Email",
    dataIndex: "email"
  }
];

class ListEmployee extends React.Component {
  state = {
    data: [],
    pagination: {},
    loading: false
  };

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

  fetch = (params = {}) => {
    console.log("params:", params);
    this.setState({
      loading: true
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

  render() {
    return (
      <Row>
       <Title level={4}>Danh sách nhân viên</Title>
        <Table
          columns={columns}
          rowKey={record => record.login.uuid}
          dataSource={this.state.data}
          pagination={this.state.pagination}
          loading={this.state.loading}
          onChange={this.handleTableChange}
        />
      </Row>
    );
  }
}
export default ListEmployee;
