import React, { Component } from "react";

class Child1 extends Component {
  constructor() {
    super();
    this.state = {
      inputField: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      inputField: event.target.value
    });
    this.props.handlerFromParant(event.target.value);
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.state.inputField}
            onChange={this.handleChange}
          />
        </form>
        <h5>
          Visible in child1:
          <br />
          {this.state.inputField}
        </h5>
      </div>
    );
  }
}
export default Child1;
