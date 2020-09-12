import React from 'react';
// import PropTypes from 'prop-types';
import firebase from 'firebase/app';
import 'firebase/auth';

class MyNavbar extends React.Component {
  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    return (
      <div className="MyNavbar">
        <h1>MyNavbar</h1>
        <button className="btn btn-light" onClick={this.logoutClickEvent}>Log Out</button>
      </div>
    );
  }
}

export default MyNavbar;
