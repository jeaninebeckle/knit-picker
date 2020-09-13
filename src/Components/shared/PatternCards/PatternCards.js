import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import patternShape from '../../../helpers/props/patternShape';

class PatternCards extends React.Component {
  static propTypes = {
    pattern: patternShape.patternShape,
  }

  render() {
    const { pattern } = this.props;

    return (
      <div class="card">
      <img class="card-img-top" src="..." alt="Card cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>
    );
  }
}

export default PatternCards;
