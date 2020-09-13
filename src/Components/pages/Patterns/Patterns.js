import React from 'react';
// import { Link } from 'react-router-dom';
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

  render() {
    const { patterns } = this.state;

    const patternCards = patterns.map((pattern) => <PatternCards key={pattern.id} pattern={pattern} />);

    return (
      <div className="Patterns">
        <h1>Patterns</h1>
        { patternCards }
      </div>
    );
  }
}

export default Patterns;
