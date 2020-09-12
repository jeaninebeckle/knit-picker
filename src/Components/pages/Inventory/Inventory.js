import React from 'react';
import { Link } from 'react-router-dom';
import NeedleCards from '../../shared/NeedleCards';
import YarnCards from '../../shared/YarnCards/YarnCards';

class Inventory extends React.Component {
  state = {
    needles: [],
    yarns: [],
  }

  getNeedles = () => {

  }

  render() {
    return (
      <div className="Inventory">
        <h1>Inventory</h1>
      </div>
    );
  }
}

export default Inventory;
