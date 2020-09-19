import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import patternShape from '../../../helpers/props/patternShape';
import './PatternCards.scss';

class PatternCards extends React.Component {
  static propTypes = {
    pattern: patternShape.patternShape,
    deletePatterns: PropTypes.func.isRequired,
  }

  deletePatternsEvent = (e) => {
    e.preventDefault();
    const { pattern, deletePatterns } = this.props;
    deletePatterns(pattern.id);
  }

  render() {
    const { pattern } = this.props;

    return (
      <div className="card">
      <img className="card-img-top" src={pattern.imageUrl} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{pattern.patternName}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Needle size: {pattern.needleSize}</li>
        <li className="list-group-item">Needle type: {pattern.needleType}</li>
        <li className="list-group-item">Needle length: {pattern.needleLength}</li>
        <li className="list-group-item">Yarn color: {pattern.yarnColor}</li>
        <li className="list-group-item">Yarn type: {pattern.yarnType}</li>
        <li className="list-group-item">Amount of yarn: {pattern.yarnWeight} grams</li>
        <li className="list-group-item">Notes: {pattern.notes}</li>
        <li className="list-group-item"><a href={pattern.patternUrl}>Take me to the pattern!</a></li>
      </ul>
      <div className="card-body">
          <Link to={`/create/${pattern.id}`} className="btn btn-secondary rounded-0 m-1">Start Knitting</Link>
          <button className="btn btn-secondary rounded-0 m-1" onClick={this.deletePatternsEvent}>Delete Pattern</button>
        </div>
    </div>
    );
  }
}

export default PatternCards;
