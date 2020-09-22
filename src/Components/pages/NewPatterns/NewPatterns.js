import React from 'react';
import _ from 'underscore';
import authData from '../../../helpers/data/authData';
import patternsData from '../../../helpers/data/patternsData';

class NewPatterns extends React.Component {
  state = {
    patternName: '',
    needleDetails: '',
    yarnDetails: '',
    imageUrl: '',
    patternUrl: '',
    notes: '',
  };

  changePatternNameEvent = (e) => {
    e.preventDefault();
    this.setState({ patternName: e.target.value });
  }

  changeNeedleDetailsEvent = (e) => {
    e.preventDefault();
    this.setState({ needleDetails: e.target.value });
  }

  changeYarnDetailsEvent = (e) => {
    e.preventDefault();
    this.setState({ yarnDetails: e.target.value });
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  changePatternUrlEvent = (e) => {
    e.preventDefault();
    this.setState({ patternUrl: e.target.value });
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    this.setState({ notes: e.target.value });
  }

  savePatterns = (e) => {
    e.preventDefault();

    const keysIWant = [
      'patternName',
      'needleDetails',
      'yarnDetails',
      'imageUrl',
      'patternUrl',
      'notes',
    ];
    const newPatterns = _.pick(this.state, keysIWant);
    newPatterns.uid = authData.getUid();

    patternsData.createPatterns(newPatterns)
      .then(() => {
        this.props.history.push('/patterns');
      })
      .catch((err) => console.error('new patterns failed', err));
  }

  render() {
    const {
      patternName,
      needleDetails,
      yarnDetails,
      imageUrl,
      patternUrl,
      notes,
    } = this.state;

    return (
      <div className="NewNeedle">
        <h2>Woohoo! New Pattern!</h2>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="">Pattern Name</label>
              <input
                type="text"
                className="form-control"
                id="patternName"
                placeholder="Easy Striped Scarf"
                value={patternName}
                onChange={this.changePatternNameEvent}
                />
            <label htmlFor="">Needle Details</label>
              <input
                type="text"
                className="form-control"
                id="needleSize"
                placeholder="size 10, circular, 16 inches"
                value={needleDetails}
                onChange={this.changeNeedleDetailsEvent}
                />
            <label htmlFor="">Yarn Details</label>
              <input
                type="text"
                className="form-control"
                id="yarnColor"
                placeholder="blue, bulky weight, 350 grams"
                value={yarnDetails}
                onChange={this.changeYarnDetailsEvent}
                />
            <label htmlFor="">Pattern Image</label>
              <input
                type="text"
                className="form-control"
                id="patternImage"
                placeholder="Must be a valid URL"
                value={imageUrl}
                onChange={this.changeImageUrlEvent}
                />
            <label htmlFor="">Pattern Website</label>
              <input
                type="text"
                className="form-control"
                id="patternUrl"
                placeholder="Include a link back to the online pattern"
                value={patternUrl}
                onChange={this.changePatternUrlEvent}
                />
            <label htmlFor="">Notes</label>
              <input
                type="text"
                className="form-control"
                id="patternNotes"
                placeholder="Other pattern details worth mentioning"
                value={notes}
                onChange={this.changeNotesEvent}
                />
            </div>
          <button className="btn btn-secondary" onClick={this.savePatterns}>Save New Pattern</button>
        </form>
      </div>
    );
  }
}

export default NewPatterns;
