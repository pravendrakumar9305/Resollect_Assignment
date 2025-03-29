import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const TopNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm p-3">
      <Container>
        <Navbar.Brand>Portfolio</Navbar.Brand>
        <div className="ms-auto">
        <img src="/profile.svg" className="rounded-circle" alt="User" width={50} height={50}/>
          <span className="me-2">Pravendra Kumar</span>
          <div>pravendra876@gmail.com</div>
        </div>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
