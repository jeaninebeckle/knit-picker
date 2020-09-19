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
          <div className="card-header font-weight-bold">
            Size {needle.size}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Type: {needle.type}</li>
            <li className="list-group-item">Needle Length: {needle.length}</li>
            <li className="list-group-item">Notes: {needle.notes}</li>
          </ul>
          <div>
          <Link to={`/needle/${needle.id}/edit`} className="btn btn-secondary rounded-0 m-1 inventory">Edit</Link>
          <button className="btn btn-secondary rounded-0 m-1 inventory" onClick={this.deleteNeedlesEvent}>Delete</button>
          </div>
        </div>
    );
  }
}

export default NeedleCards;
