import React from 'react';
import { Link } from 'react-router-dom';
import authData from '../../../helpers/data/authData';
import patternsData from '../../../helpers/data/patternsData';
import PatternCards from '../../shared/PatternCards/PatternCards';

class Patterns extends React.Component {
  state = {
    patterns: [],
  }

  getPatterns = () => {
    patternsData.getPatternsByUid(authData.getUid())
      .then((patterns) => this.setState({ patterns }))
      .catch((err) => console.error('get patterns broke', err));
  }

  componentDidMount() {
    this.getPatterns();
  }

  deletePatterns = (patternId) => {
    patternsData.deletePatterns(patternId)
      .then(() => {
        this.getPatterns();
      })
      .catch((err) => console.error('delete patterns failed', err));
  }

  render() {
    const { patterns } = this.state;

    const patternCards = patterns.map((pattern) => <PatternCards key={pattern.id} pattern={pattern} deletePatterns={this.deletePatterns}/>);

    return (
      <div className="Patterns">
        <h1>Patterns</h1>
        <Link to="/new/patterns" className="btn btn-light rounded-0 m-1">Add A New Pattern</Link>
        <div className="card-columns m-3">
          { patternCards }
        </div>
      </div>
    );
  }
}

export default Patterns;
