import React from 'react';
import { Link } from 'react-router-dom';
import patternsData from '../../../helpers/data/patternsData';
import projectShape from '../../../helpers/props/projectShape';

class ProjectCards extends React.Component {
  static propTypes = {
    project: projectShape.projectShape,
  }

  state = {
    pattern: {},
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
    e.preventDefault();
    this.setState({ status: e.target.value });
  }

  render() {
    const { pattern } = this.state;
    const { project } = this.props;

    const statuses = ['Saved for Later', 'Completed', 'In Progress'];
    const dropdown = statuses.map((status) => <option value={status}>{status}</option>);

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
        <Link to={`/single/${project.id}`} className="btn btn-dark m-1">See Full Project Details</Link>
      </div>
    );
  }
}
export default ProjectCards;
