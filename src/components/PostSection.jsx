import React, { Component } from "react";
//import { Jumbotron } from "react-bootstrap";
//import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import CommentComponent from "./CommentComponent";
import { Collapse, Button, CardBody, Card, FormGroup } from "reactstrap";

class PostSection extends Component {
  state = {
    Posts: [],
    Comments: false,
    commentValue: null,
    commentLine: [{ commentId: null, text: null }],
    isOpen: false,
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
  handleCommentValue = (e) => {
    this.setState({
      commentValue: e.target.value,
    });
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const styles = {
      border: "1px solid rgba(0, 0, 0, 0.05)",
      color: "blue",
    };
    return (
      <div>
        <div>
          <Button
            color="primary"
            onClick={() => this.toggle()}
            style={{ marginBottom: "1rem" }}
          >
            Posts
          </Button>
          <Collapse isOpen={this.state.isOpen}>
            <Card>
              <CardBody>
                <FormGroup row>
                  <p>In the posts section</p>
                  <div style={styles}>
                    <div className="jumbotron-div col s12">
                      <Container>
                        <ul>
                          {this.state.Posts.map((post) => (
                            <div>
                              <h4>Title: {post.title}</h4>
                              <p>Post: {post.body}</p>

                              <CommentComponent postid={post.id} />
                            </div>
                          ))}
                        </ul>
                      </Container>
                    </div>
                  </div>
                </FormGroup>
              </CardBody>
            </Card>
          </Collapse>
        </div>
      </div>
    );
  }
}

export default PostSection;
