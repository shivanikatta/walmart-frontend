import React, { Component } from "react";
import UserList from "./UserList";
import HeaderComponent from "./HeaderComponent";

//import HeaderComponent from "./HeaderComponent";

const divStyle = {
  display: "flex",
  alignItems: "center",
};

class MainComponent extends Component {
  state = {
    userlist: [],
    DataisLoaded: false,
  };

  componentDidMount() {
    console.log("In mount phase ");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          userlist: json,
          DataisLoaded: true,
        });
      });
  }

  render() {
    const List = this.state.userlist;
    console.log("In main");

    if (!this.state.DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div>
        <HeaderComponent />

        <div style={divStyle}>
          <div>
            {List.map((user) => (
              <UserList
                key={user.id}
                userid={user.id}
                username={user.name}
                usermail={user.email}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
