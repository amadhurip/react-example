import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";

class DeleteTab extends Component {
  render() {
    return (
      <div>
        <Table
          columns={this.props.columns}
          dataSource={this.props.dataSource}
        />
      </div>
    );
  }
}
export default DeleteTab;
