import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/auth';
import './MyNavbar.scss';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  state = {
    isOpen: false,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { isOpen } = this.state;

    const buildNavbar = () => {
      const { authed } = this.props;

      if (authed) {
        return (
          <Nav className="ml-auto navbar" navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/inventory'>Inventory</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/patterns'>Patterns</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/projects'>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/gallery'>Gallery</NavLink>
            </NavItem>
            <NavItem>
              <NavLink type="button" onClick={this.logoutClickEvent}>Log Out</NavLink>
            </NavItem>
          </Nav>
        );
      }

      return <Nav className="ml-auto" navbar></Nav>;
    };

    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/home">Knit Picker</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
         {buildNavbar()}
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default MyNavbar;
