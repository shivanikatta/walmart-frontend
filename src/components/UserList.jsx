import React, { Component } from "react";
import { Button } from "reactstrap";
//import ReactTooltip from "react-tooltip";
import Tippy from "@tippy.js/react";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";
import "tippy.js/dist/tippy.css";

class SubscriberList extends Component {
  state = {
    subData: this.props,
  };

  componentDidMount() {
    //console.log(" In mount() of the subscriber List page",this.props.subname)
  }

  render() {
    return (
      <div className="col-12 col-md-5 m-3">
        <div>
          <Tippy
            theme={"light"}
            placement={"right"}
            animation="perspective"
            role={"tooltip"}
            content={
              <div>
                <h5>Name : {this.props.username}</h5>
                <h6>Email : {this.props.usermail}</h6>
              </div>
            }
          >
            <button
              type="submit"
              color="secondary"
              onClick={() => this.props.onClick(this.props.userid)}
            >
              {this.props.username}
            </button>
          </Tippy>
        </div>
      </div>
    );
  }
}

export default SubscriberList;

// className="col-12 col-md-5 m-3"
