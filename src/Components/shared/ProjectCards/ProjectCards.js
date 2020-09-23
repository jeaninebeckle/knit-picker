import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import GalleryAlert from '../Alert/Alert';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from 'mdbreact';
import patternsData from '../../../helpers/data/patternsData';
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

  statusChangeEvent = (e) => {
    const { project, updateProject } = this.props;
    project.status = e.target.value;
    updateProject(project);
    if (e.target.value === 'Completed') {
      this.toggle();
    }
  }

  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

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
          </div>
        </div>
        <Link to={`/single/${project.id}`} className="btn btn-secondary m-1">See Full Project Details</Link>
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
      </div>
    );
  }
}
export default ProjectCards;
