import React from 'react';
import needlesData from '../../../helpers/data/needlesData';

class EditNeedle extends React.Component {
  state = {
    needle: {
      size: '',
      type: '',
      length: '',
      isOwned: true,
      notes: '',
    },
  }

  componentDidMount() {
    needlesData.getSingleNeedles(this.props.match.params.needleId)
      .then((res) => {
        const needle = res.data;
        this.setState({ needle });
      })
      .catch((err) => console.error('get needles to edit failed', err));
  }

  changeSizeEvent = (e) => {
    e.preventDefault();
    const { needle } = this.state;
    let size = parseFloat(e.target.value);
    if (isNaN(size)) {
      size = '';
    }
    needle.size = size;
    this.setState({ needle });
  }

  changeTypeEvent = (e) => {
    e.preventDefault();
    const { needle } = this.state;
    needle.type = e.target.value;
    this.setState({ needle });
  }

  changeLengthEvent = (e) => {
    e.preventDefault();
    const { needle } = this.state;
    needle.length = e.target.value;
    this.setState({ needle });
  }

  changeNotesEvent = (e) => {
    e.preventDefault();
    const { needle } = this.state;
    needle.notes = e.target.value;
    this.setState({ needle });
  }

  updateNeedles = (e) => {
    e.preventDefault();
    const { needleId } = this.props.match.params;

    needlesData
      .updateNeedles(needleId, this.state.needle)
      .then(() => {
        this.props.history.push('/inventory');
      })
      .catch((err) => console.error('edit needles broke', err));
  }

  render() {
    const {
      size,
      type,
      length,
      notes,
    } = this.state.needle;

    return (
      <div className="EditNeedle">
        <h1>Edit Needles</h1>
        <form className="col-6 offset-3">
          <div className="form-group">
            <label htmlFor="">Size</label>
              <input
                type="text"
                className="form-control"
                id="needleSize"
                placeholder="10.5"
                value={size}
                onChange={this.changeSizeEvent}
                />
            <label htmlFor="">Type</label>
              <input
                type="text"
                className="form-control"
                id="needleType"
                placeholder="circular"
                value={type}
                onChange={this.changeTypeEvent}
                />
            <label htmlFor="">Length</label>
              <input
                type="text"
                className="form-control"
                id="needleLength"
                placeholder="16 inches"
                value={length}
                onChange={this.changeLengthEvent}
                />
            <label htmlFor="">Notes</label>
              <input
                type="text"
                className="form-control"
                id="needleSize"
                placeholder="Aluminum, made by Boye"
                value={notes}
                onChange={this.changeNotesEvent}
                />
            </div>
          <button className="btn btn-warning" onClick={this.updateNeedles}>Save Changes</button>
        </form>
      </div>
    );
  }
}

export default EditNeedle;
