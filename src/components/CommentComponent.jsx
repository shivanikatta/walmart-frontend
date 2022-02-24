import React, { Component } from "react";

class CommentComponent extends Component {
  state = {
    CommentsDetails: [],
  };
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/comments?postId=" +
        this.props.postid
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          CommentsDetails: json,
        });
      });
  }

  componentDidUpdate() {
    console.log("In update of profile");
    if (this.state.CommentsDetails[0].postId != this.props.postid) {
      fetch(
        "https://jsonplaceholder.typicode.com/comments?postId=" +
          this.props.postid
      )
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            CommentsDetails: json,
          });
        });
    }
  }
  render() {
    //const open = Boolean(this.state.anchor1);
    console.log("In album");
    return (
      <div>
        <h7> Comment section </h7>{" "}
        {this.state.CommentsDetails.map((item) => (
          <ol key={item.id}>
            <h7>
              UserName: {item.name}, UserMail: {item.email}
            </h7>
            <h6>Comment: {item.body}</h6>
          </ol>
        ))}
      </div>
    );
  }
}
export default CommentComponent;
