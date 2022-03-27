import React, { Component } from "react";
import ProfileSection from "./ProfileSection";
import AlbumSection from "./AlbumSection";
import PostSection from "./PostSection";

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
        <h5>Post Section </h5>
        <PostSection selectedid={this.state.id} />
        <h5> Album section </h5>
        <AlbumSection selectedid={this.state.id} />
      </div>
    );
  }
}

export default UserDetailPage;
