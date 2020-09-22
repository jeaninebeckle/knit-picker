import React from 'react';
import firebase from 'firebase/app';
import authData from '../../../helpers/data/authData';
import ImageCards from '../../shared/ImageCards/ImageCards';
import imageData from '../../../helpers/data/imageData';
import connection from '../../../helpers/data/connection';
import 'firebase/storage';

connection();

class Gallery extends React.Component {
    state = {
      images: [],
      image: null,
      url: '',
    };

  handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };

  handleUpload = (e) => {
    const ref = firebase.storage().ref(`images/${this.state.image.name}`);

    e.preventDefault();
    const newImage = {
      imageUrl: '',
      uid: authData.getUid(),
    };
    ref.put(this.state.image).then(() => {
      ref.getDownloadURL().then((url) => {
        newImage.imageUrl = url;
        imageData.createImage(newImage).then(() => {
          this.getImages();
        });
      });
    })
      .catch((err) => console.error('could not add image', err));
  };

  getImages = () => {
    imageData.getImagesByUid(authData.getUid())
      .then((images) => this.setState({ images }))
      .catch((err) => console.error('get images broke', err));
  }

  componentDidMount() {
    this.getImages();
  }

  render() {
    const { images } = this.state;

    const imageCards = images.map((image) => <ImageCards key={image.id} image={image} />);
    return (
      <div className="gallery container">
          <br/>
          <h1>Gallery</h1>
          <h3>Upload a new photo to your collection when you finish a project!</h3>
          <div className="row">
          { imageCards }
          </div>
        <div className="file-field input-field">
          <div className="btn">
            <span>File </span>
            <input type="file" onChange={this.handleChange} />
          </div>
        </div>
        <button className="btn btn-secondary" onClick={this.handleUpload}>Upload</button>
      </div>
    );
  }
}

export default Gallery;
