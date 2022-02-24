import React, { Component } from "react";
//import { Jumbotron } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import CommentComponent from "./CommentComponent";

class PostSection extends Component {
  state = {
    Posts: [],
    Comments: false,
  };

  componentDidMount() {
    console.log("In mount of profile page");
    fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" +
        this.props.selectedid
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          Posts: json,
        });
      });
  }

  componentDidUpdate() {
    console.log("In update of profile");
    if (this.state.Posts[0].userId != this.props.selectedid) {
      fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=" +
          this.props.selectedid
      )
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            Posts: json,
          });
        });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron-div col s12">
          <Container>
            <ul className="collection">
              {this.state.Posts.map((post) => (
                <div>
                  <h4>Title: {post.title}</h4>
                  <p>Post: {post.body}</p>
                  <CommentComponent postid={post.id} />
                </div>
              ))}
            </ul>
            <Button variant="primary">Primary Button</Button>
          </Container>
        </div>
      </div>
    );
  }
}

export default PostSection;
