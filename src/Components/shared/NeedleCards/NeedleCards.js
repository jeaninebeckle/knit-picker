import React from 'react';
// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import needleShape from '../../../helpers/props/needleShape';

class NeedleCards extends React.Component {
  static propTypes = {
    needle: needleShape.needleShape,
  }

  render() {
    const { needle } = this.props;

    return (
        <div className="card">
          <div className="card-header">
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

export default NeedleCards;
