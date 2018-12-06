import React, { Component } from "react";
import "./App.css";
import "./button.css";

var arrayList = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskName: "",
      list: [],
      search: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    if (this.state.taskName === "") {
      alert("Add item");
    } else {
      console.log(this.state.taskName);
      arrayList.push(this.state.taskName);

      this.setState({
        list: arrayList,
        taskName: ""
      });
    }
  };
  searchQuery = event => {
    this.setState({ search: event.target.value });

    if (event.target.value.length > 0) {
      console.log("search query function", event.target.value);

      this.setState({
        list: arrayList.filter(function(i) {
          return i.toLowerCase().match(event.target.value);
        })
      });
    } else {
      this.setState({
        list: arrayList,
        search: ""
      });
    }
  };

  remove = index => {
    delete arrayList[index];

    let array = [];

    arrayList.map(i => (i ? array.push(i) : null));

    this.setState({
      list: array
    });
  };
  clearList = () => {
    arrayList.splice(0, arrayList.length);

    this.setState({
      list: arrayList
    });
  };
  render() {
    return (
      <div className="titles">
        <h1 className="title">SaiKiran Pellichupulu</h1>
        <h2 className="subtitle">
          Both National And International Girls Are Invited
        </h2>

        <div
          style={{
            backgroundColor: "red",
            padding: "12px",
            textalign: "center"
          }}
        >
          <input
            class="newTask"
            placeholder="vaduvu list"
            type="text"
            value={this.state.taskName}
            onChange={e => this.setState({ taskName: e.target.value })}
          />
          <br />
          <button className="enter" onClick={this.handleChange}>
            Invite
          </button>
          <br />
          <input
            class="search"
            placeholder=""
            type="text"
            value={this.state.search}
            onChange={this.searchQuery}
          />
          <div>
            {this.state.list.map((i, index) => (
              <div className="task">
                <div className="taskItem">
                  {index + 1} : {i}
                </div>
                <div>
                  <button className="remove" onClick={() => this.remove(index)}>
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="clear" onClick={this.clearList}>
            Clear The List
          </button>
        </div>
      </div>
    );
  }
}

export default App;
