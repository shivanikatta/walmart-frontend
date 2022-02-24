import React, { Component } from "react";
import {
  Collapse,
  Button,
  CardBody,
  Card,
  FormGroup,
  Label,
  Col,
  Input,
  Row,
  Badge,
} from "reactstrap";
import AlbumComponent from "./AlbumComponent";

class AlbumSection extends Component {
  state = {
    AlbumDetails: [],
    isOpen: false,
  };

  componentDidMount() {
    console.log("In mount of profile page");
    fetch(
      "https://jsonplaceholder.typicode.com/albums?userId=" +
        this.props.selectedid
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          AlbumDetails: json,
        });
      });
  }

  componentDidUpdate() {
    console.log("In update of profile");
    if (this.state.AlbumDetails[0].userId != this.props.selectedid) {
      fetch(
        "https://jsonplaceholder.typicode.com/albums?userId=" +
          this.props.selectedid
      )
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            AlbumDetails: json,
          });
        });
    }
  }

  componentWillUnmount() {}

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const styles = {
      border: "1px solid rgba(0, 0, 0, 0.05)",
      color: "blue",
    };
    var AlbumList = this.state.AlbumDetails;
    //console.log("In profile section - id is", this.props.selectedid);
    return (
      <div style={styles}>
        <div>
          <Button
            color="primary"
            onClick={() => this.toggle()}
            style={{ marginBottom: "1rem" }}
          >
            Album
          </Button>
          <Collapse isOpen={this.state.isOpen}>
            <Card>
              <CardBody>
                <FormGroup row>
                  <p>In the Album section</p>
                  <div>
                    {AlbumList.map((album) => (
                      <AlbumComponent
                        key={album.id}
                        albumid={album.id}
                        albumtitle={album.title}
                        onClick={(UID) => this.onUserSelect(UID)}
                      />
                    ))}
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

export default AlbumSection;
