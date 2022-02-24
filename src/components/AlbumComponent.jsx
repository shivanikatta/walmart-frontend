import React, { Component } from "react";
import { Toast, ToastHeader, ToastBody, Button } from "reactstrap";
//import Popover from "@material-ui/core/Popover";
import Tippy from "@tippy.js/react";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";

class AlbumComponent extends Component {
  state = {
    ImageDetails: [],
  };
  componentDidMount() {
    fetch(
      "https://jsonplaceholder.typicode.com/photos?albumId=" +
        this.props.albumid
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          ImageDetails: json,
        });
      });
  }

  componentDidUpdate() {
    console.log("In update of profile");
    if (this.state.ImageDetails[0].albumId != this.props.albumid) {
      fetch(
        "https://jsonplaceholder.typicode.com/photos?albumId=" +
          this.props.albumid
      )
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            ImageDetails: json,
          });
        });
    }
  }
  render() {
    //const open = Boolean(this.state.anchor1);
    console.log("In album");
    return (
      <div>
        <Toast>
          <ToastHeader>
            {this.props.albumid}(AlbumId): Images in the album{" "}
            <Tippy
              theme={"light"}
              placement={"right"}
              animation="perspective"
              role={"tooltip"}
              content={
                <div>
                  <h1> Images of album : {this.props.albumid} </h1>{" "}
                  {this.state.ImageDetails.map((item) => (
                    <ol key={item.id}>
                      ImageId: {item.id}, ImageTitle: {item.title}, ImageURL:{" "}
                      {item.url}
                    </ol>
                  ))}
                </div>
              }
            >
              <button
                type="submit"
                color="secondary"
                onClick={() => this.props.onClick(this.props.userid)}
              >
                Image
              </button>
            </Tippy>
          </ToastHeader>
          <ToastBody max-width>{this.props.albumtitle}</ToastBody>
        </Toast>
      </div>
    );
  }
}
export default AlbumComponent;

/*

 <Popover
              anchor1={this.state.anchor1}
              open={open}
              id={open ? "simple-popover" : undefined}
              onClose={() => {
                this.setState({ Anchor1: null });
              }}
              transformOrigin={{
                horizontal: "center",
                vertical: "center",
              }}
              anchorOrigin={{
                horizontal: "center",
                vertical: "center",
              }}
            >
              Inside Image section
            </Popover>
*/
