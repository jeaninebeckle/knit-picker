import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from '../GalleryModal/GalleryModal';
import patternsData from '../../../helpers/data/patternsData';
import utils from '../../../helpers/utils';
import projectShape from '../../../helpers/props/projectShape';
import './ProjectCards.scss';

class ProjectCards extends React.Component {
  static propTypes = {
    project: projectShape.projectShape,
    updateProject: PropTypes.func.isRequired,
  }

  state = {
    pattern: {},
    status: '',
    dateFinish: '',
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
    project.status = e.target.value;
    if (e.target.value === 'Completed') {
      project.dateFinish = utils.getDate();
    }
    updateProject(project);
    if (e.target.value === 'Completed') {
      Modal.toggle();
    }
  }

  // finish = () => {
  //   const { dateFinish } = this.state;
  //   this.setState({ dateFinish: utils.getDate() });
  // }

  render() {
    const { pattern } = this.state;
    const { project } = this.props;

    const statuses = ['Saved for Later', 'Completed', 'In Progress'];
    const dropdown = statuses.map((status, index) => <option value={status} key={index}>{status}</option>);

    return (
      <div className="card projectCard">
        <img className="card-img-top projectImg" src={pattern.imageUrl} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{pattern.patternName}</h5>
          <div>
          <select className="selector" value={project.status} onChange={this.statusChangeEvent}>
              {dropdown}
          </select>
          <p className="m-3">Date started: {project.dateStart}</p>
          <p className="m-3">Date completed: {project.dateFinish}</p>
          </div>
        </div>
        <Link to={`/single/${project.id}`} className="btn btn-secondary m-1">See Full Project Details</Link>
      </div>
    );
  }
}
export default ProjectCards;
