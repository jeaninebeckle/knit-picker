import React from 'react';
import imageShape from '../../../helpers/props/imageShape';
import './ImageCards.scss';

class ImageCards extends React.Component {
  static propTypes = {
    image: imageShape.imageShape,
  }

  render() {
    const { image } = this.props;

    return (
      <div className="card galleryImg">
        <img className="card-img-top" src={image.imageUrl} alt="Card cap" />
      </div>
    );
  }
}

export default ImageCards;
