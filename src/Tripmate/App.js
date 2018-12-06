import React, { Component } from "react";
import "antd/dist/antd.css";

import {
  Tabs,
  Radio,
  Icon,
  DatePicker,
  Input,
  Select,
  Button,
  Table
} from "antd";

const TabPane = Tabs.TabPane;
const Option = Select.Option;
const RadioGroup = Radio.Group;

const columns = [
  {
    title: "Date",
    dataIndex: "date",
    key: "date"
  },
  {
    title: "place",
    dataIndex: "place",
    key: "place"
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type"
  }
];
let data = [];
let countA = 0;
let countB = 0;
let countC = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterdata: [],
      dateValue: "",
      placeValue: "",
      typeValue: ""
    };
  }

  tourSubmit = e => {
    e.preventDefault();
    if (
      this.state.dateValue === "" ||
      this.state.placeValue === "" ||
      this.state.typeValue === ""
    ) {
      alert("Add item");
    } else {
      var tempvar = {
        date: this.state.dateValue,
        place: this.state.placeValue,
        type: this.state.typeValue
      };

      console.log(tempvar);
      data.push(tempvar);

      if (this.state.typeValue.match("Trek")) countA++;
      if (this.state.typeValue.match("Tropic")) countB++;
      if (this.state.typeValue.match("Club")) countC++;

      this.setState({
        filterdata: data,
        dateValue: "",
        placeValue: "",
        typeValue: ""
      });
    }
  };

  handlefilter = event => {
    this.setState({
      filterdata: data
    });

    if (event.target.value !== "All") {
      console.log("search query function", event.target.value);

      this.setState({
        filterdata: data.filter(function(i) {
          return i.type.match(event.target.value);
        })
      });
    }
  };

  callback = key => {
    console.log(key);
  };
  dateChange = (date, dateString) => {
    console.log(date, dateString);
    this.setState({ dateValue: dateString });
  };
  placeChange = event => {
    console.log(event.target.value);
    this.setState({ placeValue: event.target.value });
  };

  typeChange = value => {
    console.log(value);
    this.setState({ typeValue: value });
  };

  render() {
    return (
      <div style={{ margin: 20 }}>
        <Tabs tabPosition="left" defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab={<Icon style={{ fontSize: 30 }} type="home" />} key="1">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <h1>Madhu Travel Agencies</h1>

              <div>
                <h4> All Count:{data.length} </h4>
                <h4> Trek Count:{countA} </h4>
                <h4> Tropic Count:{countB}</h4>
                <h4> Club Count:{countC} </h4>
              </div>
            </div>
          </TabPane>
          <TabPane
            tab={<Icon style={{ fontSize: 30 }} type="schedule" />}
            key="2"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
              }}
            >
              <h1>Add A Trip</h1>
              Date:
              <DatePicker
                style={{ width: 150 }}
                defaultValue={this.state.dateValue}
                onChange={this.dateChange}
              />
              Place:
              <Input
                style={{ width: 150 }}
                type="text"
                value={this.state.placeValue}
                onChange={this.placeChange}
              />
              Type:
              <Select
                defaultValue="Trek"
                style={{ width: 150 }}
                value={this.state.typeValue}
                onChange={this.typeChange}
              >
                <Option value="Trek">Trek</Option>
                <Option value="Tropic">Tropic</Option>
                <Option value="Club">Club</Option>
              </Select>
              <br />
              <Button onClick={this.tourSubmit}>submit</Button>
            </div>
          </TabPane>
          <TabPane tab={<Icon style={{ fontSize: 30 }} type="table" />} key="3">
            <Table columns={columns} dataSource={this.state.filterdata} />
            <div className="filters">
              Filter by:
              <RadioGroup onChange={this.handlefilter}>
                <Radio value={"All"}>All</Radio>
                <Radio value={"Trek"}>Trek</Radio>
                <Radio value={"Tropic"}>Tropic</Radio>
                <Radio value={"Club"}>Club</Radio>
              </RadioGroup>
            </div>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
export default App;
