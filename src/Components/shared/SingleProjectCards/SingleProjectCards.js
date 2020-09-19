import React from 'react';
import patternShape from '../../../helpers/props/patternShape';
import projectShape from '../../../helpers/props/projectShape';

class SingleProjectCards extends React.Component {
  static propTypes = {
    project: projectShape.projectShape,
    pattern: patternShape.patternShape,
  }

  render() {
    const { project, pattern } = this.props;

    return (
      <div className="card single">
        <img className="card-img-top" src={pattern.imageUrl} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{pattern.patternName}</h5>
          <div>
            <h5>Status: {project.status}</h5>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Needle size: {pattern.needleSize}</li>
              <li className="list-group-item">Needle type: {pattern.needleType}</li>
              <li className="list-group-item">Needle length: {pattern.needleLength}</li>
              <li className="list-group-item">Yarn color: {pattern.yarnColor}</li>
              <li className="list-group-item">Yarn type: {pattern.yarnType}</li>
              <li className="list-group-item">Amount of yarn: {pattern.yarnWeight} grams</li>
              <li className="list-group-item">Notes: {pattern.notes}</li>
            </ul>
            <button className="btn btn-secondary"><a href={pattern.patternUrl}>Get the pattern here</a></button>
          </div>
        </div>
      </div>
    );
  }
}
export default SingleProjectCards;
