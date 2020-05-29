/* eslint-disable comma-dangle */
import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import logo from '../../static/wefinance-logo.png';
import signInIcon from '../../static/user.svg';


function navbar() {
  return (
    <Container>
      <Navbar bg="white">
    <Navbar.Brand href="/">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top logo"
        alt="React Bootstrap logo"
      /> {' '}
      <span className='logo-name'>Wefinance</span>
    </Navbar.Brand>
    <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
  <Navbar.Text style={{
    fontWeight: 'bold',
    fontSize: '13px',
    marginRight: '20px',
  }}><img src={signInIcon} style={{ width: '16px', marginRight: '5px', }}/> Sign in</Navbar.Text>
    <Button style={{
      fontSize: '13px',
      fontWeight: 'bold',
    }} href="/#audit">Audit</Button>
  </Navbar.Collapse>
  </Navbar>
    </Container>
  );
}

export default navbar;
