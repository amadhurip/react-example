import React, { Component } from "react";

class Fetch extends Component {
  render() {
    let a = [{ name: "Mahesh", age: 24 }, { age: 27 }, { name: "Arvind" }];
    return (
      <div>
        {a.map(i => (
          <div>
            {i.name ? i.name : "NA"}
            {i.age ? i.age : "NA"}
          </div>
        ))}
      </div>
    );
  }
}
export default Fetch;
