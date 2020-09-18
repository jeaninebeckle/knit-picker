import React from 'react';
import yarnsData from '../../../helpers/data/yarnsData';

class EditYarn extends React.Component {
  state = {
    yarn: {
      color: '',
      type: '',
      weight: '',
      isOwned: true,
      material: '',
      notes: '',
    },
  }

  componentDidMount() {
    yarnsData.getSingleYarns(this.props.match.params.yarnId)
      .then((res) => {
        const yarn = res.data;
        this.setState({ yarn });
      })
      .catch((err) => console.error('get yarns to edit failed', err));
  }

  changeColorEvent = (e) => {
    e.preventDefault();
    const { yarn } = this.state;
    yarn.color = e.target.value;
    this.setState({ yarn });
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    const { yarn } = this.state;
    yarn.type = e.target.value;
    this.setState({ yarn });
  }

  changeWeightEvent = (e) => {
    e.preventDefault();
    const { yarn } = this.state;
    let weight = parseFloat(e.target.value);
    if (isNaN(weight)) {
      weight = '';
    }
    yarn.weight = weight;
    this.setState({ yarn });
  }

  changeMaterialEvent = (e) => {
    e.preventDefault();
    const { yarn } = this.state;
    yarn.material = e.target.value;
    this.setState({ yarn });
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    const { yarn } = this.state;
    yarn.notes = e.target.value;
    this.setState({ yarn });
  }

  updateYarns = (e) => {
    e.preventDefault();
    const { yarnId } = this.props.match.params;

    yarnsData
      .updateYarns(yarnId, this.state.yarn)
      .then(() => {
        this.props.history.push('/inventory');
      })
      .catch((err) => console.error('edit yarns broke', err));
  }

  render() {
    const {
      color,
      type,
      weight,
      material,
      notes,
    } = this.state.yarn;

    return (
      <div className="EditYarn">
        <h1>EditYarn</h1>
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
          <button className="btn btn-warning" onClick={this.updateYarns}>Save Changes</button>
        </form>
      </div>
    );
  }
}

export default EditYarn;
