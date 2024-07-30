import React from 'react';
import { Navbar } from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import bridgeLogo from './img/bridge-logos_transparent.png';
import Avatar from '@mui/material/Avatar';
import { Nav } from 'react-bootstrap';
function Home() {
  return (
    <div>
        <Navbar className="bg-body-tertiary" data-bs-theme="light" bg="primary">
        <Container>
        <Avatar
        alt="bridge VMS"
        src={bridgeLogo}
        sx={{ width: 60, height: 60 }}
      />
          <Navbar.Brand href="#home">bridge VMS</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/adding">AddVendor</Nav.Link>
            <Nav.Link href="/update">UpdateVendor</Nav.Link>
            <Nav.Link href="/delete">DeleteVendor</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Home