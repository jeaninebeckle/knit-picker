import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import yarnShape from '../../../helpers/props/yarnShape';

class YarnCards extends React.Component {
  static propTypes = {
    yarn: yarnShape.yarnShape,
    deleteYarns: PropTypes.func.isRequired,
  }

  deleteYarnsEvent = (e) => {
    e.preventDefault();
    const { yarn, deleteYarns } = this.props;
    deleteYarns(yarn.id);
  }

  render() {
    const { yarn } = this.props;

    return (
        <div className="card">
          <div className="card-header">
            {yarn.color}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Yarn type: {yarn.type}</li>
            <li className="list-group-item">Weight: {yarn.weight} grams</li>
            <li className="list-group-item">Material: {yarn.material}</li>
            <li className="list-group-item">Notes: {yarn.notes}</li>
          </ul>
          <button onClick={this.deleteYarnsEvent}>Delete</button>
        </div>
    );
  }
}

export default YarnCards;
