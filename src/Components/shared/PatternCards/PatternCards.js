import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import patternShape from '../../../helpers/props/patternShape';
import './PatternCards.scss';

class PatternCards extends React.Component {
  static propTypes = {
    pattern: patternShape.patternShape,
  }

  render() {
    const { pattern } = this.props;

    return (
      <div class="card">
      <img class="card-img-top" src={pattern.imageUrl} alt="Card cap" />
      <div class="card-body">
        <h5 class="card-title">{pattern.patternName}</h5>
        <p class="card-text">Item: {pattern.item}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Needle size: {pattern.needleSize}</li>
        <li class="list-group-item">Needle type: {pattern.needleType}</li>
        <li class="list-group-item">Needle length: {pattern.needleLength}</li>
        <li class="list-group-item">Yarn color: {pattern.yarnColor}</li>
        <li class="list-group-item">Yarn type: {pattern.yarnType}</li>
        <li class="list-group-item">Amount of yarn: {pattern.yarnWeight} grams</li>
        <li class="list-group-item">Notes: {pattern.notes}</li>
      </ul>
      <div class="card-body">
        {/* <button className="btn btn-dark m-1" onClick={this.deletePatternEvent}>Delete</button> */}
        <a href={pattern.patternUrl}>Take me to the pattern!</a>
      </div>
    </div>
    );
  }
}

export default PatternCards;
