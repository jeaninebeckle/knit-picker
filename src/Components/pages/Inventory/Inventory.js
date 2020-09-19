import React from 'react';
import { Link } from 'react-router-dom';
import NeedleCards from '../../shared/NeedleCards/NeedleCards';
import YarnCards from '../../shared/YarnCards/YarnCards';
import authData from '../../../helpers/data/authData';
import needlesData from '../../../helpers/data/needlesData';
import yarnsData from '../../../helpers/data/yarnsData';
import './Inventory.scss';

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

  deleteNeedles = (needleId) => {
    needlesData.deleteNeedles(needleId)
      .then(() => {
        this.getNeedles();
      })
      .catch((err) => console.error('delete needles failed', err));
  }

  deleteYarns = (yarnId) => {
    yarnsData.deleteYarns(yarnId)
      .then(() => {
        this.getYarns();
      })
      .catch((err) => console.error('delete yarn failed', err));
  }

  render() {
    const { needles, yarns } = this.state;

    const needleCards = needles.map((needle) => <NeedleCards key={needle.id} needle={needle} deleteNeedles={this.deleteNeedles}/>);
    const yarnCards = yarns.map((yarn) => <YarnCards key={yarn.id} yarn={yarn} deleteYarns={this.deleteYarns}/>);

    return (
      <div className="Inventory">
        <h1>Inventory</h1>
          <div className="needles">
            <h2>Needles</h2>
              <Link to="/new/needles" className="btn btn-light rounded-0 m-1">Add New Needles</Link>
            <div className="container">
              <div className="row">
                { needleCards }
              </div>
            </div>
        </div>
        <div id="invYarn" className="yarns">
        <h2>Yarns</h2>
        <Link to="/new/yarn" className="btn btn-light rounded-0 m-1">Add New Yarn</Link>
        <div className="container">
        <div className="row">
          { yarnCards }
        </div>
        </div>
        </div>
        </div>
    );
  }
}

export default Inventory;
