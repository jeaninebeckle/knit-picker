import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import patternsData from '../../../helpers/data/patternsData';
import projectShape from '../../../helpers/props/projectShape';

class ProjectCards extends React.Component {
  static propTypes = {
    project: projectShape.projectShape,
    updateProject: PropTypes.func.isRequired,
  }

  state = {
    pattern: {},
    status: '',
  }

  componentDidMount() {
    const { project } = this.props;
    patternsData.getSinglePatterns(project.patternId)
      .then((res) => {
        const pattern = res.data;
        this.setState({ pattern });
      })
      .catch((err) => console.error('get patterns failed', err));
  }

  statusChangeEvent = (e) => {
    const { project, updateProject } = this.props;
    // const editedProject = { ...project }; // this is making a copy of the project with all of the same keys, not 100% sure this is necessary
    project.status = e.target.value;
    updateProject(project);
  }

  render() {
    const { pattern } = this.state;
    const { project } = this.props;

    const statuses = ['Saved for Later', 'Completed', 'In Progress'];
    const dropdown = statuses.map((status, index) => <option value={status} key={index}>{status}</option>);

    return (
      <div className="card">
        <img className="card-img-top" src={pattern.imageUrl} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{pattern.patternName}</h5>
          <div>
          <select value={project.status} onChange={this.statusChangeEvent}>
              {dropdown}
          </select>
          </div>
        </div>
        <Link to={`/single/${project.id}`} className="btn btn-secondary rounded-0 m-1">See Full Project Details</Link>
      </div>
    );
  }
}
export default ProjectCards;
