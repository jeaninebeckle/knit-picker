import React from 'react';
import needleShape from '../../../helpers/props/needleShape';
import './ProjNeedleCards.scss';

class ProjNeedleCards extends React.Component {
  static propTypes = {
    needle: needleShape.needleShape,
  }

  render() {
    const { needle } = this.props;

    return (
        <div className="card projNeedleCard">
          <div className="card-header font-weight-bold">
            Size {needle.size}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Type: {needle.type}</li>
            <li className="list-group-item">Needle Length: {needle.length}</li>
            <li className="list-group-item">Notes: {needle.notes}</li>
          </ul>
        </div>
    );
  }
}

export default ProjNeedleCards;
