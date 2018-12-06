import React, { Component } from "react";

class Child2 extends Component {
  render() {
    return (
      <div>
        <h5>
          Visible in child2:
          <br />
          {this.props.fromParent}
        </h5>
      </div>
    );
  }
}
export default Child2;
