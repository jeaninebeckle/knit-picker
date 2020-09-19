import React from 'react';
import { Link } from 'react-router-dom';
import patternsData from '../../../helpers/data/patternsData';
import projectsData from '../../../helpers/data/projectsData';
import patternShape from '../../../helpers/props/patternShape';
import SingleProjectCards from '../../shared/SingleProjectCards/SingleProjectCards';
import './SingleProject.scss';

class SingleProject extends React.Component {
  static propTypes = {
    pattern: patternShape.patternShape,
  }

  state = {
    project: {},
    pattern: {},
  }

  getProject = () => {
    const { projectId } = this.props.match.params;
    projectsData.getSingleProject(projectId)
      .then((res) => {
        this.setState({ project: res.data });
        this.getPattern(res.data.patternId);
      })
      .catch((err) => console.error('get single project failed', err));
  }

  getPattern = (patternId) => {
    patternsData.getSinglePatterns(patternId)
      .then((res) => {
        const pattern = res.data;
        this.setState({ pattern });
      })
      .catch((err) => console.error('get patterns failed', err));
  }

  componentDidMount() {
    this.getProject();
  }

  render() {
    const { project, pattern } = this.state;

    return (
      <div className="SingleProject">
        <h1>{pattern.patternName} Project</h1>
        <div className="container">
          <SingleProjectCards project={project} pattern={pattern}/>
        </div>
        <Link to={'/projects'} className="btn btn-secondary m-1">Return to all projects</Link>
      </div>
    );
  }
}

export default SingleProject;
