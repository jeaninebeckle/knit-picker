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
      <div className="container-fluid">
      <img className="auth-img" src="https://i.imgur.com/q0e0yqJ.jpg" alt="home" />
      </div>
      <button className="btn btn-light authbtn m-3" onClick={this.loginClickEvent}>Please log in to get started</button>
      </div>
    );
  }
}

export default Auth;
