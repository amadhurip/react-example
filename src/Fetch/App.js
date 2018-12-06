import React, { Component } from "react";
import { Avatar } from "antd";
import "./App.css";
const data = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      num: "",
      firstName: "",
      lastName: "",
      url: ""
    };
  }
  componentWillMount() {
    fetch("https://reqres.in/api/users?page=1")
      .then(Response => Response.json())
      .then(response => {
        console.log(response, "aaaaaaaaaa");
        data.push(...response.data);
        this.setState({
          data: data
        });
      })
      .then(response => {
        // data.push(this.state.data1);
        fetch("https://reqres.in/api/users?page=2")
          .then(Response => Response.json())
          .then(response => {
            console.log(response, "bbbbbbbbb");
            data.push(...response.data);
            this.setState({
              data: data
            });
          });
      })
      .then(response => {
        // data[0].push(this.state.data2);
        console.log(data, "99999999");
        fetch("https://reqres.in/api/users?page=3")
          .then(Response => Response.json())
          .then(response => {
            console.log(response, "bbbbbbbbb");
            data.push(...response.data);
            this.setState({
              data: data
            });
          });
        console.log(data.length, "00000000");
        // this.setState({
        //   data: data
        // });
      });
  }

  // componentDidMount() {
  //   data.push(this.state.data1);
  // }
  submit = e => {
    e.preventDefault();

    var tempvar = [
      {
        id: 13,
        first_name: "mouli",
        last_name: "madhu",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
      }
    ];

    console.log(tempvar);
    data.push(...tempvar);
    this.setState({
      data: data
    });
    console.log(data, "iiiiiiiii");
  };

  render() {
    console.log(data, "44444444");
    console.log(this.state.data.length, "stateeeeeeeee");
    return (
      <div>
        {this.state.data.length ? (
          this.state.data.map((d, i) => (
            <div className="pic">
              <img
                style={{ width: "20%", borderRadius: "100%" }}
                src={d.avatar}
              />
              {d.first_name}
            </div>
          ))
        ) : (
          <h2>No data</h2>
        )}

        <button onClick={this.submit}>submit</button>
      </div>
    );
  }
}
export default App;
