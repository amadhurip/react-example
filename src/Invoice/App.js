import React, { Component } from "react";

import "antd/dist/antd.css";

class Table extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      shareholders: [{ name: "" }],
      price: 0,
      shareholders1: [{ price: 0 }],
      amount: 0,
      shareholders2: [{ amount: 0 }]
    };
  }
  componentWillMount() {}
  handlePriceChange = idx => event => {
    const p = this.state.shareholders1.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, price: event.target.value };
    });

    this.setState({ shareholders1: p });
  };

  handleAmountChange = idx => event => {
    const a = this.state.shareholders2.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, amount: event.target.value };
    });

    this.setState({ shareholders2: a });
  };

  handleShareholderNameChange = idx => evt => {
    const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, name: evt.target.value };
    });

    this.setState({ shareholders: newShareholders });
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      name,
      shareholders,
      shareholders1,
      price,
      shareholders2,
      amount
    } = this.state;
  };

  handleAddShareholder = () => {
    this.setState({
      shareholders: this.state.shareholders.concat([{ name: "" }]),
      shareholders1: this.state.shareholders1.concat([{ price: 0 }]),
      shareholders2: this.state.shareholders2.concat([{ amount: 0 }])
    });
  };

  handleRemoveShareholder = idx => () => {
    console.log(idx);
    delete this.state.shareholders[idx];
    delete this.state.shareholders1[idx];
    delete this.state.shareholders2[idx];

    this.setState({
      shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx),
      shareholders1: this.state.shareholders1.filter((s, sidx) => idx !== sidx),
      shareholders2: this.state.shareholders2.filter((s, sidx) => idx !== sidx)
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Invoice</h4>

        {this.state.shareholders.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              type="text"
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <input
              type="text"
              name="price"
              onChange={this.handlePriceChange(idx)}
            />
            <input
              type="text"
              name="amount"
              onChange={this.handleAmountChange(idx)}
            />
            <input
              type="text"
              name="total"
              value={
                parseInt(this.state.shareholders1[idx].price) *
                parseInt(this.state.shareholders2[idx].amount)
              }
            />
            <button type="button" onClick={this.handleRemoveShareholder(idx)}>
              -
            </button>
          </div>
        ))}
        <button type="button" onClick={this.handleAddShareholder}>
          Add
        </button>
      </form>
    );
  }
}

export default Table;
