import React from 'react';
import _ from 'underscore';
import authData from '../../../helpers/data/authData';
import patternsData from '../../../helpers/data/patternsData';

class NewPatterns extends React.Component {
  state = {
    patternName: '',
    needleSize: '',
    needleType: '',
    needleLength: '',
    yarnColor: '',
    yarnType: '',
    yarnWeight: '',
    imageUrl: '',
    patternUrl: '',
    notes: '',
  };

  changePatternNameEvent = (e) => {
    e.preventDefault();
    this.setState({ patternName: e.target.value });
  }

  changeNeedleSizeEvent = (e) => {
    e.preventDefault();
    this.setState({ needleSize: e.target.value });
  }

  changeNeedleTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ needleType: e.target.value });
  }

  changeNeedleLengthEvent = (e) => {
    e.preventDefault();
    this.setState({ needleLength: e.target.value });
  }

  changeYarnColorEvent = (e) => {
    e.preventDefault();
    this.setState({ yarnColor: e.target.value });
  }

  changeYarnTypeEvent = (e) => {
    e.preventDefault();
    this.setState({ yarnType: e.target.value });
  }

  changeYarnWeightEvent = (e) => {
    e.preventDefault();
    this.setState({ yarnWeight: e.target.value });
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
      'needleSize',
      'needleType',
      'needleLength',
      'yarnColor',
      'yarnType',
      'yarnWeight',
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
      needleSize,
      needleType,
      needleLength,
      yarnColor,
      yarnType,
      yarnWeight,
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
            <label htmlFor="">Required Needle Size</label>
              <input
                type="text"
                className="form-control"
                id="needleSize"
                placeholder="10"
                value={needleSize}
                onChange={this.changeNeedleSizeEvent}
                />
            <label htmlFor="">Required Needle Type</label>
              <input
                type="text"
                className="form-control"
                id="needleType"
                placeholder="circular"
                value={needleType}
                onChange={this.changeNeedleTypeEvent}
                />
            <label htmlFor="">Required Needle Length</label>
              <input
                type="text"
                className="form-control"
                id="needleLength"
                placeholder="16 inches"
                value={needleLength}
                onChange={this.changeNeedleLengthEvent}
                />
            <label htmlFor="">Preferred Yarn Color</label>
              <input
                type="text"
                className="form-control"
                id="yarnColor"
                placeholder="blue"
                value={yarnColor}
                onChange={this.changeYarnColorEvent}
                />
            <label htmlFor="">Required Yarn Type</label>
              <input
                type="text"
                className="form-control"
                id="yarnType"
                placeholder="bulky"
                value={yarnType}
                onChange={this.changeYarnTypeEvent}
                />
            <label htmlFor="">Weight (in grams)</label>
              <input
                type="text"
                className="form-control"
                id="yarnWeight"
                placeholder="200"
                value={yarnWeight}
                onChange={this.changeYarnWeightEvent}
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
