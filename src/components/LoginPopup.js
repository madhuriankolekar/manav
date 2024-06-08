// LoginPopup.js

import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './login.css'; // Import CSS module

const LoginPopup = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} className={styles.modal}>
      <Modal.Header closeButton className={styles.header}>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
    </Modal>
  );
};

export default LoginPopup;
