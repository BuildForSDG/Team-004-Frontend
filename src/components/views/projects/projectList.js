/* eslint-disable comma-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Table, Dropdown, DropdownButton, Modal, Form, Button, ProgressBar
} from 'react-bootstrap';


function ProjectList(props) {
  const [modalShow, setModalShow] = useState(false);
  const projects = props.allProjects;
  const project = projects[0].map((index) => (
                <tr key={index.id}>
                <td>
                <img className='project-icon' src={index.img} alt='project-icon' />
                </td>
                <td className='project-name'>{index.name}</td>
                <td>total cost of ${index.cost}</td>
          <td>{index.milestone.length} milestones left</td>
                <td>in progress</td>
          <td>{index.deadline}</td>
          <td>
          <DropdownButton className='project-edit'>
          <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
          <Dropdown.Item onClick={() => setModalShow(true)}>
                  View
          </Dropdown.Item>
          <MileStoneModal
          projectName = {index.name}
            milestones = {index.milestone}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <Dropdown.Item href="#/action-3">Delete</Dropdown.Item>
            </DropdownButton>
          </td>
              </tr>
  ));
  return (
    <Table responsive="sm">
      <tr>
      <th>Project icon</th>
        <th>Project name</th>
        <th>Project cost</th>
        <th>Project milestones</th>
        <th>Project progress</th>
        <th>Project deadline</th>
        <th>Project modify</th>
      </tr>
      <tbody>
      {project}
      </tbody>
  </Table>
  );
}
function MileStoneModal(props) {
  const [showModal, setModalShow] = useState(false);
  const { milestones } = props;
  const milestone = milestones.map((index) => (
                <Modal.Body key={index.name}>
                        <div className='milestone'>
          <div className='milestone-name'>
            <span>{index.name}</span>
    <div className='milestone-progress'>
            <ProgressBar now ={index.progress} variant="success" label={`${index.progress} %`} />
    </div>
          </div>
<DropdownButton title="modify">
  <Dropdown.Item as="button">Complete</Dropdown.Item>
  <Dropdown.Item as="button">Update progress</Dropdown.Item>
</DropdownButton>
        </div>
                </Modal.Body>
  ));
  let showMilestone;
  if (props.show === false) {
    showMilestone = <div></div>;
  } else {
    showMilestone = <div>
          {milestone};
          <Modal
{...props}
size="md"
aria-labelledby="contained-modal-title-vcenter"
centered
>
<Modal.Header closeButton>
        <Modal.Title style={{ fontSize: '20px', fontWeight: 'bold', }}>{props.projectName} milestones</Modal.Title>
</Modal.Header>
{milestone}
<button onClick={() => { setModalShow(true); }} className='add-milestone'>Add a new milestone</button>
</Modal>
  </div>;
  }
  return (
        <div>
                {showMilestone}
                <AddMileStoneForm show={showModal} onHide={() => setModalShow(false)} />
        </div>
  );
}
function AddMileStoneForm(props) {
  let view;
  if (props.show === false) {
    view = <div></div>;
  } else {
    view = <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title id="contained-modal-title-vcenter">
                    Add new Milestone
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
            <Form.Group controlId="formBasic">
              <Form.Label>Milestone name</Form.Label>
              <Form.Control type="text" placeholder="Enter your project name" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
                </Modal.Body>
              </Modal>;
  }
  return (
          <div>
                  {view}
          </div>
  );
}
ProjectList.propTypes = {
  allProjects: PropTypes.array
};
MileStoneModal.propTypes = {
  milestones: PropTypes.array,
  onHide: PropTypes.func,
  show: PropTypes.bool,
  projectName: PropTypes.string
};
AddMileStoneForm.propTypes = {
  show: PropTypes.bool
};
export default ProjectList;
