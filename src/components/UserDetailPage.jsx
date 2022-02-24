import React, { Component } from "react";
import ProfileSection from "./ProfileSection";

class UserDetailPage extends Component {
  state = {
    id: this.props.selectedid,
  };

  componentDidMount() {}

  componentWillUnmount() {
    //console.log("In Sub unmount");
  }

  render() {
    console.log("In Detail page outside if prop val", this.props.selectedid);
    console.log("In Detail page outside if state val", this.state.id);
    if (this.state.id != this.props.selectedid) {
      this.setState({ id: this.props.selectedid });
    }
    return (
      <div>
        <ProfileSection selectedid={this.state.id} />
        <h1> Hii Welcome back {this.props.selectedid} </h1>
      </div>
    );
  }
}

export default UserDetailPage;
