import React from 'react';
import _ from 'underscore';
import authData from '../../../helpers/data/authData';
import needlesData from '../../../helpers/data/needlesData';

class NewNeedle extends React.Component {
  state = {
    size: '',
    length: '',
    isOwned: true,
    notes: '',
  };

  changeSizeEvent = (e) => {
    e.preventDefault();
    this.setState({ size: e.target.value });
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ type: e.target.value });
  }

  changeLengthEvent = (e) => {
    e.preventDefault();
    this.setState({ length: e.target.value });
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    this.setState({ notes: e.target.value });
  }

  saveNeedles = (e) => {
    e.preventDefault();

    const keysIWant = ['size', 'type', 'length', 'isOwned', 'notes'];
    const newNeedles = _.pick(this.state, keysIWant);
    newNeedles.uid = authData.getUid();

    needlesData.createNeedles(newNeedles)
      .then(() => {
        this.props.history.push('/inventory');
      })
      .catch((err) => console.error('new needles not happening', err));
  }

  render() {
    const {
      size,
      type,
      length,
      notes,
    } = this.state;
    return (
      <div className="NewNeedle">
        <h2>Woohoo! New Needles!</h2>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor=""></label>
              <input
                type="text"
                className="form-control"
                id="needleSize"
                placeholder="Enter Size"
                value={size}
                onChange={this.changeSizeEvent}
                />
            <label htmlFor=""></label>
              <input
                type="text"
                className="form-control"
                id="needleType"
                placeholder="Enter Type"
                value={type}
                onChange={this.changeTypeEvent}
                />
            <label htmlFor=""></label>
              <input
                type="text"
                className="form-control"
                id="needleLength"
                placeholder="Enter Length (include inches or cm)"
                value={length}
                onChange={this.changeLengthEvent}
                />
            <label htmlFor=""></label>
              <input
                type="text"
                className="form-control"
                id="needleSize"
                placeholder="Enter Notes"
                value={notes}
                onChange={this.changeNotesEvent}
                />
          </div>
          <button className="btn btn-warning" onClick={this.saveNeedles}>Save Needles</button>
        </form>
      </div>
    );
  }
}

export default NewNeedle;
