import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
  render() {
    return(
    <React.Fragment>
      <Navbar>
        <div className="container">
            <NavbarBrand href="/">Stuart Creed Music</NavbarBrand>
        </div>
      </Navbar>
    </React.Fragment>
    );
  }
}

export default Header;
