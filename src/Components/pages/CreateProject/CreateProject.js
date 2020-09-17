import React from 'react';
import patternsData from '../../../helpers/data/patternsData';
import patternShape from '../../../helpers/props/patternShape';
import PatternCards from '../../shared/PatternCards/PatternCards';

class CreateProject extends React.Component {
  static propTypes = {
    pattern: patternShape.patternShape,
  }

  state = {
    pattern: {},
  }

  getPattern = () => {
    const patternId = this.props.match.params;
    patternsData.getSinglePatterns(patternId)
      .then((res) => this.setState({ pattern: res.data }))
      .catch((err) => console.error('get pattern failed', err));
  }

  componentDidMount() {
    this.getPattern();
  }

  render() {
    const { pattern } = this.state;

    return (
      <div className="CreateProject">
        <h1>CreateProject</h1>
        <PatternCards pattern={pattern} />
      </div>
    );
  }
}

export default CreateProject;
