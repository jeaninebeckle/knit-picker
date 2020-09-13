import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import needleShape from '../../../helpers/props/needleShape';

class NeedleCards extends React.Component {
  static propTypes = {
    needle: needleShape.needleShape,
    deleteNeedles: PropTypes.func.isRequired,
  }

  deleteNeedlesEvent = (e) => {
    e.preventDefault();
    const { needle, deleteNeedles } = this.props;
    deleteNeedles(needle.id);
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
          <button className="btn btn-dark m-1" onClick={this.deleteNeedlesEvent}>Delete</button>
          <Link to={`/needle/${needle.id}/edit`} className="btn btn-dark m-1">Edit</Link>
        </div>
    );
  }
}

export default NeedleCards;
