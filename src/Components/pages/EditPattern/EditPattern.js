import React from 'react';
import patternsData from '../../../helpers/data/patternsData';

class EditPattern extends React.Component {
  state = {
    pattern: {
      patternName: '',
      needleDetails: '',
      yarnDetails: '',
      imageUrl: '',
      patternUrl: '',
      notes: '',
    },
  }

  componentDidMount() {
    patternsData.getSinglePatterns(this.props.match.params.patternId)
      .then((res) => {
        const pattern = res.data;
        this.setState({ pattern });
      })
      .catch((err) => console.error('get pattern to edit failed', err));
  }

  changePatternNameEvent = (e) => {
    e.preventDefault();
    const { pattern } = this.state;
    pattern.patternName = e.target.value;
    this.setState({ pattern });
  }

  changeNeedleDetailsEvent = (e) => {
    e.preventDefault();
    const { pattern } = this.state;
    pattern.needleDetails = e.target.value;
    this.setState({ pattern });
  }

  changeYarnDetailsEvent = (e) => {
    e.preventDefault();
    const { pattern } = this.state;
    pattern.yarnDetails = e.target.value;
    this.setState({ pattern });
  }

  changeImageUrlEvent = (e) => {
    e.preventDefault();
    const { pattern } = this.state;
    pattern.imageUrl = e.target.value;
    this.setState({ pattern });
  }

  changePatternUrlEvent = (e) => {
    e.preventDefault();
    const { pattern } = this.state;
    pattern.patternUrl = e.target.value;
    this.setState({ pattern });
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    const { pattern } = this.state;
    pattern.notes = e.target.value;
    this.setState({ pattern });
  }

  updatePattern = (e) => {
    e.preventDefault();
    const { patternId } = this.props.match.params;

    patternsData
      .updatePatterns(patternId, this.state.pattern)
      .then(() => {
        this.props.history.push('/patterns');
      })
      .catch((err) => console.error('edit patterns broke', err));
  }

  render() {
    const {
      patternName,
      needleDetails,
      yarnDetails,
      imageUrl,
      patternUrl,
      notes,
    } = this.state.pattern;

    return (
      <div className="NewNeedle">
        <h2>Edit Pattern</h2>
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
          <button className="btn btn-secondary" onClick={this.updatePattern}>Save Changes</button>
        </form>
      </div>
    );
  }
}

export default EditPattern;
