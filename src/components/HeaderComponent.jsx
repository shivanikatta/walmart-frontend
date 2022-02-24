import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";

class HeaderComponent extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">All User List</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default HeaderComponent;
