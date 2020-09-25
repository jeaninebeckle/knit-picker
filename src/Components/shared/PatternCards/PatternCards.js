import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import patternShape from '../../../helpers/props/patternShape';
import './PatternCards.scss';

class PatternCards extends React.Component {
  static propTypes = {
    pattern: patternShape.patternShape,
    deletePatterns: PropTypes.func.isRequired,
    updatePattern: PropTypes.func.isRequired,
  }

  deletePatternsEvent = (e) => {
    e.preventDefault();
    const { pattern, deletePatterns } = this.props;
    deletePatterns(pattern.id);
  }

  render() {
    const { pattern } = this.props;

    return (
      <div className="card patternCard">
      <img className="card-img-top patternImg" src={pattern.imageUrl} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{pattern.patternName}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Needle Details: {pattern.needleDetails}</li>
        <li className="list-group-item">Yarn Details: {pattern.yarnDetails}</li>
        <li className="list-group-item">Notes: {pattern.notes}</li>
        <li className="list-group-item"><a href={pattern.patternUrl} target="blank">Click me for the pattern!</a></li>
      </ul>
      <div className="card-body">
          <Link to={`/create/${pattern.id}`} className="btn btn-secondary m-1">Start Knitting</Link>
          <Link to={`/edit/${pattern.id}`} className="btn btn-secondary m-1">Edit</Link>
          <button className="btn btn-secondary m-1" onClick={this.deletePatternsEvent}>Delete</button>
        </div>
    </div>
    );
  }
}

export default PatternCards;
