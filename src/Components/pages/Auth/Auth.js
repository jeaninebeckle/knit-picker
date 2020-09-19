import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <h1>Welcome To Knit Picker!</h1>
        <h3>a place to organize all of your knitting needs</h3>
        <button className="btn btn-outline-light rounded-0 m-3" onClick={this.loginClickEvent}>Log in to get started</button>
      </div>
    );
  }
}

export default Auth;
