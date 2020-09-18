import React from 'react';
import yarnShape from '../../../helpers/props/yarnShape';

class ProjYarnCards extends React.Component {
  static propTypes = {
    yarn: yarnShape.yarnShape,
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
        </div>
    );
  }
}

export default ProjYarnCards;
