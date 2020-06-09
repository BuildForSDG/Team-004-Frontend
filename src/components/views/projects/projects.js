/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import '../../../styles/project/project.css';
import { project } from '../../actions/project';
import ProjectList from './projectList';
import addIcon from '../../../static/add.svg';


class Projects extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false,
      modalHide: true
    };
    this.setModalShow = this.setModalShow.bind(this);
    this.setModalHide = this.setModalHide.bind(this);
    this.submitProject = this.submitProject.bind(this);
  }

  componentDidMount() {
    const { loadProjects } = this.props;
    loadProjects();
  }

  setModalShow() {
    this.setState({
      modalShow: true
    });
  }

  setModalHide() {
    this.setState({
      modalShow: false
    });
  }

  submitProject(e) {
    // Handle the form data and validation here
    e.preventDefault();
  }

  render() {
    const { getProjects } = this.props;
    let result;
    if (getProjects.loading === true) {
      result = <div>
        Loading
      </div>;
    }
    if (getProjects.loading === false && getProjects.error === null) {
      result = <ProjectList allProjects = {getProjects.project} />;
    }
    return (
      <div className='projects'>
        {result}
          <div className='add-project'>
            <div onClick={this.setModalShow} className='btn btn-primary add-project-btn'>
              <img src={addIcon} alt='add-icon' />
            </div>
         <AddProjectForm formSubmit = {this.submitProject} show={this.state.modalShow} onHide={this.setModalHide} />
            </div>
      </div>
    );
  }
}
function AddProjectForm(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit = {props.formSubmit}>
  <Form.Group controlId="formBasic">
    <Form.Label>Project name</Form.Label>
    <Form.Control type="text" placeholder="Enter your project name" />
  </Form.Group>
  <Form.Group controlId="formBasic">
    <Form.Label>Project cost</Form.Label>
    <Form.Control type="text" placeholder="Enter your project cost" />
  </Form.Group>
  <Form.Group>
  <Form.Label>Project icon</Form.Label>
    <Form.File id="exampleFormControlFile1"/>
  </Form.Group>
  <Form.Group controlId="formBasic">
    <Form.Label>Project deadline</Form.Label>
    <Form.Control type="text" placeholder="Enter your project deadline" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    loadProjects: () => dispatch(project())
  };
}
function mapStateToProps(state) {
  return {
    getProjects: state.project
  };
}
Projects.propTypes = {
  loadProjects: PropTypes.func.isRequired,
  getProjects: PropTypes.object.isRequired
};

AddProjectForm.propTypes = {
  onHide: PropTypes.func,
  formSubmit: PropTypes.func
};
export default connect(mapStateToProps, mapDispatchToProps)(Projects);
