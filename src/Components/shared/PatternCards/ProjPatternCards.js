import React from 'react';
import patternShape from '../../../helpers/props/patternShape';
import './PatternCards.scss';

class ProjPatternCards extends React.Component {
  static propTypes = {
    pattern: patternShape.patternShape,
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
      </ul>
    </div>
    );
  }
}

export default ProjPatternCards;
