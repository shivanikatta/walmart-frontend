import React, { Component } from "react";

class UserDetailPage extends Component {
  state = {
    id: null,
  };

  componentDidMount() {}

  componentWillUnmount() {
    //console.log("In Sub unmount");
  }

  render() {
    return (
      <div>
        <h1> Hii Welcome back {this.props.selectedid} </h1>
      </div>
    );
  }
}

export default UserDetailPage;
