import React from 'react';
import _ from 'underscore';
import authData from '../../../helpers/data/authData';
import yarnsData from '../../../helpers/data/yarnsData';

class NewYarn extends React.Component {
  state = {
    color: '',
    type: '',
    weight: '',
    isOwned: true,
    material: '',
    notes: '',
  }

  changeColorEvent = (e) => {
    e.preventDefault();
    this.setState({ color: e.target.value });
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ type: e.target.value });
  }

  changeWeightEvent = (e) => {
    e.preventDefault();
    let weight = parseFloat(e.target.value);
    if (isNaN(weight)) {
      weight = '';
    }
    this.setState({ weight });
  }

  changeMaterialEvent = (e) => {
    e.preventDefault();
    this.setState({ material: e.target.value });
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    this.setState({ notes: e.target.value });
  }

  saveYarns = (e) => {
    e.preventDefault();

    const keysIWant = ['color', 'type', 'weight', 'isOwned', 'material', 'notes'];
    const newYarns = _.pick(this.state, keysIWant);
    newYarns.uid = authData.getUid();

    yarnsData.createYarns(newYarns)
      .then((res) => {
        this.props.history.push('/inventory');
      })
      .catch((err) => console.error('new yarns not happening', err));
  }

  render() {
    const {
      color,
      type,
      weight,
      material,
      notes,
    } = this.state;

    return (
      <div className="NewYarn">
        <h1>Woohoo! New Yarn!</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="">Color</label>
              <input
                type="text"
                className="form-control"
                id="yarnColor"
                placeholder="blue"
                value={color}
                onChange={this.changeColorEvent}
                />
            <label htmlFor="">Type</label>
              <input
                type="text"
                className="form-control"
                id="yarnType"
                placeholder="bulky"
                value={type}
                onChange={this.changeTypeEvent}
                />
            <label htmlFor="">Weight (in grams)</label>
              <input
                type="text"
                className="form-control"
                id="yarnWeight"
                placeholder="200"
                value={weight}
                onChange={this.changeWeightEvent}
                />
            <label htmlFor="">Material</label>
              <input
                type="text"
                className="form-control"
                id="yarnMaterial"
                placeholder="wool"
                value={material}
                onChange={this.changeMaterialEvent}
                />
            <label htmlFor="">Notes</label>
              <input
                type="text"
                className="form-control"
                id="yarnNotes"
                placeholder="My favorite yarn!"
                value={notes}
                onChange={this.changeNotesEvent}
                />
            </div>
          <button className="btn btn-secondary rounded-0" onClick={this.saveYarns}>Save Yarn</button>
        </form>
      </div>
    );
  }
}

export default NewYarn;
