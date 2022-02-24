import React, { Component } from "react";
import UserList from "./UserList";
import HeaderComponent from "./HeaderComponent";
import UserDetailPage from "./UserDetailPage";

//import HeaderComponent from "./HeaderComponent";

const divStyle = {
  display: "flex",
  alignItems: "center",
};

class MainComponent extends Component {
  state = {
    userlist: [],
    DataisLoaded: false,
    selectedUserId: null,
  };

  componentDidMount() {
    console.log("In mount phase ");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          userlist: json,
          DataisLoaded: true,
          selectedUserId: null,
        });
      });
  }

  onUserSelect(UID) {
    this.setState({ selectedUserId: UID });
  }

  render() {
    const List = this.state.userlist;
    console.log("In main");

    if (!this.state.DataisLoaded)
      return (
        <div>
          <h1> Loading Please wait .... </h1>{" "}
        </div>
      );

    if (this.state.selectedUserId) {
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
                  onClick={(UID) => this.onUserSelect(UID)}
                />
              ))}
            </div>
            <div style={{ width: 280 + "px" }}>
              <p> </p>
            </div>
            <div>
              <UserDetailPage selectedid={this.state.selectedUserId} />
            </div>
          </div>
        </div>
      );
    }
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
                onClick={(UID) => this.onUserSelect(UID)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
