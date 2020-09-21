import React from 'react';
// import { storage } from 'firebase';
// import React, { useState } from 'react';
import firebase from 'firebase/app';
// import { render } from 'react-dom';
import connection from '../../../helpers/data/connection';
import 'firebase/storage';

connection();

class Gallery extends React.Component {
    state = {
      image: null,
      url: '',
    };

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = firebase.storage().ref(`images/${image.name}`).put(image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.warn(error);
      },
      () => {
        firebase.storage()
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url });
          });
      },
    );
  };

  render() {
    const storageRef = firebase.storage.ref(`images/${image.name}`);

    return (
      <div className="center">
          <br/>
          <h2>Gallery</h2>
          <br/>
          <br/>
        <br />
        <br />
        <br />
        <div className="file-field input-field">
          <div className="btn">
            <span>File</span>
            <input type="file" onChange={this.handleChange} />
          </div>
          <div className="file-path-wrapper">
            <input className="file-path validate" type="text" />
          </div>
        </div>
        <button onClick={this.handleUpload}>Upload</button>
        <img src={this.state.url} alt="knitting"/>
      </div>
    );
  }
}

export default Gallery;
