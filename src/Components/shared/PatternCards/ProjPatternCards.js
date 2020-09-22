import React from 'react';
import patternShape from '../../../helpers/props/patternShape';
import './ProjPattern.scss';

class ProjPatternCards extends React.Component {
  static propTypes = {
    pattern: patternShape.patternShape,
  }

  render() {
    const { pattern } = this.props;

    return (
      <div className="card projPattern">
      <img className="card-img-top" src={pattern.imageUrl} alt="Card cap" />
      <div className="card-body">
        <h5 className="card-title">{pattern.patternName}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Needle Details: {pattern.needleDetails}</li>
        <li className="list-group-item">Yarn Details: {pattern.yarnDetails}</li>
        <li className="list-group-item">Notes: {pattern.notes}</li>
      </ul>
    </div>
    );
  }
}

export default ProjPatternCards;
