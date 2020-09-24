import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';
import PropTypes from 'prop-types';
// import Modal from '../GalleryModal/GalleryModal';
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
    modal: false,
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

  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  statusChangeEvent = (e) => {
    const { project, updateProject } = this.props;
    project.status = e.target.value;
    if (e.target.value === 'Completed') {
      project.dateFinish = utils.getDate();
    }
    updateProject(project);
    if (e.target.value === 'Completed') {
      this.toggle();
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
            <MDBContainer>
    <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
      <MDBModalHeader toggle={this.toggle}></MDBModalHeader>
      <MDBModalBody>
        <h3>Nice work!</h3>
        <h4>Do you want to add a photo of your finished product to the gallery?</h4>
      </MDBModalBody>
      <MDBModalFooter>
        <Link to={'/gallery'} className="btn btn-secondary">Yes! Let's go!</Link>
        <MDBBtn color="secondary" onClick={this.toggle}>Maybe later</MDBBtn>
      </MDBModalFooter>
    </MDBModal>
    </MDBContainer>
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
