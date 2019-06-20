import React from 'react';
import { ModalContext } from '../contexts/ModalContext';
import { Modal, Button, Form } from 'react-bootstrap';

export default class SingInUp extends React.Component {
  constructor() {
    super();
    this.state = {
      s_name: "",
      s_email: "",
      s_pass: "",
      l_email: "",
      l_pass: "",
      closed: false,
    }
  }

  getName = (event) => {
    this.setState({ s_name: event.target.value });
  }

  getEmail = (event) => {
    this.setState({ s_email: event.target.value });
  }

  getPassword = (event) => {
    this.setState({ s_pass: event.target.value });
  }

  getLoginEmail = (event) => {
    this.setState({ l_email: event.target.value });
  }

  getLoginPassword = (event) => {
    this.setState({ l_pass: event.target.value });
  }


  onSignUp = () => {
    const { s_name, s_email, s_pass } = this.state;
    fetch('http://localhost:3000/signup', {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: s_name,
        email: s_email,
        password: s_pass
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(console.log);
  }

  onSignIn = () => {
    const { l_email, l_pass } = this.state;
    fetch('http://localhost:3000/signin', {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        email: l_email,
        password: l_pass
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          localStorage.setItem('userName', data.result[0].name);
          localStorage.setItem('userEmail', data.result[0].email);
          localStorage.setItem('userId', data.result[0]._id);
          localStorage.setItem('token', data.token);
          this.setState({ closed: true });
        } else {
          console.log(data);
        }
      })
      .catch(console.log);
  }

  render() {
    return (
      <ModalContext.Consumer>
        {
          value => {
            const { openModal, handleModal, switches, heading, handleForm } = value;
            return (
              <Modal show={openModal} onHide={handleModal}>
                <Modal.Header closeButton>
                  <Modal.Title>{heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {switches ?
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" size="sm" onChange={this.getName} />
                      </Form.Group>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" size="sm" onChange={this.getEmail} />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="sm" onChange={this.getPassword} />
                      </Form.Group>
                      <Button variant="primary" onClick={this.onSignUp} size="sm">
                        Register
                   </Button>
                      <Form.Text className="text-muted">
                        Already have an account <Button variant="link" size="sm" onClick={handleForm}>Login</Button>
                      </Form.Text>
                    </Form> :
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" size="sm" onChange={this.getLoginEmail} />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" size="sm" onChange={this.getLoginPassword} />
                      </Form.Group>
                      <Button variant="primary" onClick={this.onSignIn} size="sm">
                        Login
                      </Button>
                      <Form.Text className="text-muted">
                        <Button variant="link" size="sm">Forget your password?</Button>
                      </Form.Text>
                      
                      {/* close modal after successful login (temporary solution for now) */}
                      {this.state.closed ? (this.setState({ closed: false }) ? null : handleModal()) : null}
                    </Form>
                  }
                </Modal.Body>
              </Modal>
            );
          }
        }
      </ModalContext.Consumer>
    );
  }
}
