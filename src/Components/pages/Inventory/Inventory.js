import React from 'react';
// import { Link } from 'react-router-dom';
import NeedleCards from '../../shared/NeedleCards/NeedleCards';
import YarnCards from '../../shared/YarnCards/YarnCards';
import authData from '../../../helpers/data/authData';
import needlesData from '../../../helpers/data/needlesData';
import yarnsData from '../../../helpers/data/yarnsData';

class Inventory extends React.Component {
  state = {
    needles: [],
    yarns: [],
  }

  getNeedles = () => {
    needlesData.getNeedlesByUid(authData.getUid())
      .then((needles) => this.setState({ needles }))
      .catch((err) => console.error('get needles broke', err));
  }

  getYarns = () => {
    yarnsData.getYarnsByUid(authData.getUid())
      .then((yarns) => this.setState({ yarns }))
      .catch((err) => console.error('get yarns broke', err));
  }

  componentDidMount() {
    this.getNeedles();
    this.getYarns();
  }

  render() {
    const { needles, yarns } = this.state;

    const needleCards = needles.map((needle) => <NeedleCards key={needle.id} needle={needle}/>);
    const yarnCards = yarns.map((yarn) => <YarnCards key={yarn.id} yarn={yarn}/>);

    return (
      <div className="Inventory">
        <h1>Inventory</h1>
        <div className="needles">
        <h2>Needles</h2>
        <div className="card-columns m-3">
          { needleCards }
        </div>
        </div>
        <div className="yarns">
        <h2>Yarns</h2>
        <div className="card-columns m-3">
          { yarnCards }
        </div>
        </div>
      </div>
    );
  }
}

export default Inventory;
