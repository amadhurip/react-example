import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends Component {
  constructor() {
    super();
    this.state = {
      fromChild: ""
    };
    this.handleData = this.handleData.bind(this);
  }

  handleData(data) {
    this.setState({
      fromChild: data
    });
  }

  render() {
    return (
      <div>
        <Child1 handlerFromParant={this.handleData} />
        <h5>
          Received by parent:
          <br />
          {this.state.fromChild}
        </h5>
        <Child2 fromParent={this.state.fromChild} />
      </div>
    );
  }
}
export default Parent;
