import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, OverlayTrigger, Popover, Form, FormControl, Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './CustomNavbar.css'; // Import the CSS file

const CustomNavbar = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate(); // Access to navigate function for routing

  const handleLoginModalClose = () => setShowLoginModal(false);
  const handleLoginModalShow = () => setShowLoginModal(true);

  const handleSignupButtonClick = () => {
    // Redirect to signup page when Signup button is clicked
    navigate('/signup');
  };

  const renderNavLinkWithPopover = (label, href, popoverContent) => (
    <OverlayTrigger
      trigger={['hover', 'focus']}
      placement="bottom"
      overlay={
        <Popover id={`${href}-popover`} className="popover-with-arrow">
          <Popover.Header as="h3">{label}</Popover.Header>
          <Popover.Body>{popoverContent}</Popover.Body>
        </Popover>
      }
    >
      <Nav.Link href={href}>{label}</Nav.Link>
    </OverlayTrigger>
  );

  return (
    <div>
      <BootstrapNavbar bg="light" expand="lg" className="custom-navbar">
        <BootstrapNavbar.Brand href="#home">Navbar</BootstrapNavbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
        </Form>
        <Button variant="primary" onClick={handleLoginModalShow} className="login-button">Login</Button> {/* Login button */}
      </BootstrapNavbar>
      <BootstrapNavbar bg="light" expand="lg">
        <Nav className="mr-auto">
          {renderNavLinkWithPopover('Home', '#home', 'This is the Home popover content.')}
          {renderNavLinkWithPopover('Tshirt', '#tshirt', 'This is the Tshirt popover content.')}
          {renderNavLinkWithPopover('Pants', '#pants', 'This is the Pants popover content.')}
          {renderNavLinkWithPopover('Jacket', '#jacket', 'This is the Jacket popover content.')}
          {renderNavLinkWithPopover('Trophy', '#trophy', 'This is the Trophy popover content.')}
          {renderNavLinkWithPopover('Pens', '#pens', 'This is the Pens popover content.')}
        </Nav>
      </BootstrapNavbar>
      {/* Login Modal */}
      <Modal show={showLoginModal} onHide={handleLoginModalClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Add your login form components here */}
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
         <Button variant="secondary" onClick={handleLoginModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomNavbar;
