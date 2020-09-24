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

class GalleryModal extends React.Component {
state = {
  modal: false,
}

  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  }

  render() {
    return (
      <div>
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

export default GalleryModal;
