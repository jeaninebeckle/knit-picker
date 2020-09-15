import React from 'react';
import { Link } from 'react-router-dom';
import projectShape from '../../../helpers/props/projectShape';

class ProjectCards extends React.Component {
  static propTypes = {
    project: projectShape.projectShape,
  }

  render() {
    const { project } = this.props;

    return (
      <div className="card">
        <img className="card-img-top" src="..." alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">Project pattern name placeholder</h5>
          <div>
          <label htmlFor="status">Select a status:</label>
            <select name="status" id="status">
            <option value="completed">{project.status}</option>
              <option value="completed">Completed</option>
              <option value="inProgress">In Progress</option>
              <option value="later">Saved for Later</option>
            </select>
          </div>
        </div>
        <Link to={`/single/${project.id}`} className="btn btn-dark m-1">See Full Project Details</Link>
      </div>
    );
  }
}
export default ProjectCards;
