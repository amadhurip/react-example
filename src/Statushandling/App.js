import React, { Component } from "react";
import "antd/dist/antd.css";
import { Tabs, Table } from "antd";
import ActiveTab from "./ActiveTab";
import DeleteTab from "./DeleteTab";
let data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    employeeid: "52",
    status: "Deleted"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    employeeid: "53",
    status: "Active"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    employeeid: "54",
    status: "Active"
  },
  {
    key: "4",
    name: "Madhu",
    age: 33,
    employeeid: "55",
    status: "Deleted"
  },
  {
    key: "5",
    name: "Joe0 Black",
    age: 320,
    employeeid: "854",
    status: "Active"
  },
  {
    key: "6",
    name: "Joe4 Black",
    age: 321,
    employeeid: "554",
    status: "Active"
  },
  {
    key: "7",
    name: "Joe9 Black",
    age: 323,
    employeeid: "554",
    status: "Active"
  },
  {
    key: "8",
    name: "Joe7 Black",
    age: 3,
    employeeid: "24",
    status: "Active"
  },
  {
    key: "9",
    name: "Joe3 Black",
    age: 35,
    employeeid: "34",
    status: "Active"
  },
  {
    key: "10",
    name: "Joe1 Black",
    age: 30,
    employeeid: "4",
    status: "Active"
  }
];
const newData = [];
const TabPane = Tabs.TabPane;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterdata: [],
      filterdata1: []
    };
  }
  callback = (key, data) => {
    if (key == 2) {
      this.setState({
        filterdata: data.filter(function(i) {
          return i.status.match("Active");
        })
      });
    }
    if (key == 3) {
      this.setState({
        filterdata1: data.filter(function(i) {
          return i.status.match("Deleted");
        })
      });
    }
  };

  changeStatus = (i, data) => {
    console.log(data, "qqqqqqqqq");
    console.log(i, "3333");
    if (i.status === "Active") {
      i.status = "Deleted";
    }
    newData.push(i);
    this.setState({
      filterdata1: newData
    });
  };
  render() {
    console.log("this.state.filterdata1", this.state.filterdata1);
    const columns = [
      {
        title: "Name",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age"
      },
      {
        title: "EmployeeID",
        dataIndex: "employeeid",
        key: "employeeid"
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status"
      },
      {
        title: "Action",
        key: "action",
        render: item => (
          <button onClick={() => this.changeStatus(item, data)}>-</button>
        )
      }
    ];
    console.log(data, "pppppppppp");
    return (
      <Tabs defaultActiveKey="1" onChange={key => this.callback(key, data)}>
        <TabPane tab="EmployeeData" key="1">
          <Table columns={columns} dataSource={data} />
        </TabPane>
        <TabPane tab="Active" key="2">
          <ActiveTab columns={columns} dataSource={this.state.filterdata} />
        </TabPane>

        <TabPane tab="Deleted" key="3">
          <DeleteTab columns={columns} dataSource={this.state.filterdata1} />
        </TabPane>
      </Tabs>
    );
  }
}
export default App;
