import React, { Component } from "react";
import "./App.css";
import "./button.css";
import { Button, Tabs } from "antd";
import "antd/dist/antd.css";

const TabPane = Tabs.TabPane;
var arrayRecipe = [];
var arrayIngrediant = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "",
      ingrediantName: "",
      editRecipeName: "",
      editIngrediantName: "",
      listRecipe: [],
      listIngrediant: [],

      visible2: false,
      visible3: false,
      visible4: false
    };
  }

  handleChange = () => {
    arrayRecipe.push(this.state.recipeName);
    arrayIngrediant.push(this.state.ingrediantName);
    console.log(arrayRecipe, arrayIngrediant);

    this.setState({
      listRecipe: arrayRecipe,
      listIngrediant: arrayIngrediant,
      ingrediantName: "",
      recipeName: ""
    });
  };
  handleChange1 = index => {
    arrayRecipe[index] = this.state.editRecipeName;
    arrayIngrediant[index] = this.state.editIngrediantName;
    console.log(arrayRecipe);

    this.setState({
      listRecipe: arrayRecipe,
      listIngrediant: arrayIngrediant,
      ingrediantName: "",
      recipeName: ""
    });
  };

  remove = index => {
    delete arrayRecipe[index];
    delete arrayIngrediant[index];
    this.setState({
      listRecipe: arrayRecipe,
      listIngrediant: arrayIngrediant
    });
  };
  removeAll = () => {
    arrayRecipe.splice(0, arrayRecipe.length);
    arrayIngrediant.splice(0, arrayIngrediant.length);
    alert(arrayRecipe.length);
    this.setState({
      listRecipe: arrayRecipe,
      listIngrediant: arrayIngrediant
    });
  };
  click = () => {
    this.setState({
      visible2: true
    });
  };
  edit = () => {
    this.setState({
      visible3: true
    });
  };
  cancel = () => {
    console.log("hi");
    this.setState({
      visible2: false
    });
  };
  add = () => {
    this.setState({
      visible: true
    });
  };

  callback = key => {
    console.log(key);
  };
  render() {
    console.log(
      "this.state.listRecipe",
      this.state.listRecipe,
      this.state.visible
    );
    return (
      <div className="App">
        <div className="App-header">
          <h1 style={{ color: "white" }}>This is a Recipe App</h1>
          <h2 style={{ color: "white" }}>You can record your recipes here</h2>
          <h3 style={{ color: "white" }}>
            All your recipes are stored in your browser's local storage and any
            changes you make will remain saved as long as you continue to access
            this page from the same browser. Built by Sean Smith
          </h3>
        </div>
        <div>
          <Tabs
            tabPosition="left"
            defaultActiveKey="1"
            onChange={this.callback}
          >
            <TabPane tab="Add new Recipe" key="1">
              <div>
                Recipe:
                <input
                  type="text"
                  value={this.state.recipeName}
                  onChange={e => this.setState({ recipeName: e.target.value })}
                />
                <br />
                Ingrediants:
                <input
                  type="text"
                  value={this.state.ingrediantName}
                  onChange={e =>
                    this.setState({ ingrediantName: e.target.value })
                  }
                />
                <br />
                <Button
                  type="primary"
                  className="large"
                  onClick={() => this.handleChange()}
                >
                  Submit Recipe
                </Button>
                <div style={{ borderRight: "1px solid red", width: "500px" }}>
                  {this.state.listRecipe.map((i, index) => (
                    <div>
                      <Button className="small" onClick={this.click}>
                        {i}
                      </Button>

                      {this.state.visible2 ? (
                        <div>
                          {this.state.listIngrediant.map(i => (
                            <div>{i}</div>
                          ))}

                          <Button className="medium" onClick={this.edit}>
                            Edit
                          </Button>
                          {this.state.visible3 ? (
                            <div>
                              Edit Recipe:
                              <input
                                type="text"
                                value={this.state.editRecipeName}
                                onChange={e =>
                                  this.setState({
                                    editRecipeName: e.target.value
                                  })
                                }
                              />
                              <input
                                type="text"
                                value={this.state.editIngrediantName}
                                onChange={e =>
                                  this.setState({
                                    editIngrediantName: e.target.value
                                  })
                                }
                              />
                              <Button
                                type="primary"
                                className="large"
                                onClick={() => this.handleChange1(index)}
                              >
                                Save Recipe
                              </Button>
                              <Button className="large" onClick={this.cancel}>
                                Cancel
                              </Button>
                            </div>
                          ) : null}
                          <Button
                            className="medium"
                            onClick={() => this.remove(index)}
                          >
                            Remove this Recipe
                          </Button>
                        </div>
                      ) : null}

                      <hr />
                    </div>
                  ))}
                </div>
              </div>
            </TabPane>
            <TabPane tab="Show all Recipes" key="2">
              <div>
                {this.state.listRecipe.map(i => (
                  <div>{i}</div>
                ))}
              </div>
            </TabPane>
            <TabPane tab="Remove all Recipes" key="3">
              Please click here to remove all receipes
              <Button className="medium" onClick={this.removeAll}>
                Remove All Recipes
              </Button>
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
export default App;
