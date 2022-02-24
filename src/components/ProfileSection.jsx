import React, { Component } from "react";

class ProfileSection extends Component {
  state = {
    UserDetails: [],
  };

  componentDidMount() {
    console.log("In mount of profile page");
    fetch("https://jsonplaceholder.typicode.com/users/" + this.props.selectedid)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          UserDetails: json,
        });
      });
  }

  componentDidUpdate() {
    console.log("In update of profile");
    if (this.state.UserDetails.id != this.props.selectedid) {
      fetch(
        "https://jsonplaceholder.typicode.com/users/" + this.props.selectedid
      )
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            UserDetails: json,
          });
        });
    }
  }

  componentWillUnmount() {}

  render() {
    const styles = {
      border: "1px solid rgba(0, 0, 0, 0.05)",
      color: "blue",
    };

    console.log("In profile section - id is", this.props.selectedid);
    return (
      <div style={styles}>
        <h4> Name : {this.state.UserDetails.name} </h4>
        <h4> Username : {this.state.UserDetails.username} </h4>
        <h4> Email : {this.state.UserDetails.email} </h4>
      </div>
    );
  }
}

export default ProfileSection;
