/* eslint-disable max-len */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import backgroundImage from '../assets/free_mentors_background.jpg';

export default class Signup extends React.Component {
  render() {
    return (
      <>
        <Container
          style={{
            minWidth: '100%'
          }}
        >
          <Row>
            <Col
              xs={12}
              md={8}
              style={{
                backgroundColor: '#4897DE',
                backgroundImage: `url(${backgroundImage})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                // background: 'rgba(250, 250, 250, 0.1)',
                color: '#ffff',
                textAlign: 'center',
                paddingTop: '40px'
              }}
            >
              <h1>
                Free Mentors
              </h1>
              <hr
                style={{
                  height: '2px',
                  width: '50%',
                  border: 'none',
                  borderRadius: '15px',
                  backgroundColor: '#ffff',
                }}
              />
              <h2
                style={{
                  paddingTop: '40px'
                }}
              >
                Join FreeMentors and get free mentorship in your field
              </h2>
              <h3
                style={{
                  paddingTop: '20px'
                }}
              >
                At
{' '}
                <span
                  style={{
                    color: '#0CB42D'
                  }}
                >
                  FreeMentors
                </span>
                , your skills improvement our concern
              </h3>
              <p
                style={{
                  paddingTop: '150px',
                  color: 'orange',
                  fontWeight: 'bold',
                  fontSize: '12px'
                }}
              >
                “Tell me and I forget, teach me and I may remember, involve me and I learn.” ― Benjamin Franklin
              </p>
            </Col>
            <Col
              xs={12}
              md={4}
              style={{
                textAlign: 'center',
                backgroundColor: '#FAFAFA'
              }}
            >
              <h4
                style={{
                  paddingBottom: '20px',
                  paddingTop: '20px'
                }}
              >
                Signup
              </h4>
              <Form
                style={{
                  marginTop: '40px',
                  textAlign: 'center',
                  margin: 'auto',
                  paddingBottom: '20px'
                }}
              >
                <Form.Group
                  controlId='formBasicFirstname'
                  style={{
                    width: '300px',
                    margin: 'auto',
                    marginBottom: '10px'
                  }}
                >
                  <Form.Control type='text' placeholder='First name' />
                </Form.Group>
                <Form.Group
                  controlId='formBasicLastname'
                  style={{
                    width: '300px',
                    margin: 'auto',
                    marginBottom: '10px'
                  }}
                >
                  <Form.Control type='text' placeholder='Last name' />
                </Form.Group>
                <Form.Group
                  controlId='formBasicEmail'
                  style={{
                    width: '300px',
                    margin: 'auto',
                    marginBottom: '10px'
                  }}
                >
                  <Form.Control type='email' placeholder='Email' />
                </Form.Group>
                <Form.Group
                  controlId='formBasicPassword'
                  style={{
                    width: '300px',
                    margin: 'auto',
                    marginBottom: '10px'
                  }}
                >
                  <Form.Control type='password' placeholder='Password' />
                </Form.Group>
                <Form.Group
                  controlId='formBasicAddress'
                  style={{
                    width: '300px',
                    margin: 'auto',
                    marginBottom: '10px'
                  }}
                >
                  <Form.Control type='text' placeholder='Address' />
                </Form.Group>
                <Form.Group
                  controlId='formBasicOccupation'
                  style={{
                    width: '300px',
                    margin: 'auto',
                    marginBottom: '10px'
                  }}
                >
                  <Form.Control type='text' placeholder='Occupation' />
                </Form.Group>
                <Form.Group
                  controlId='formBasicExpertise'
                  style={{
                    width: '300px',
                    margin: 'auto',
                    marginBottom: '30px'
                  }}
                >
                  <Form.Control type='text' placeholder='Expertise' />
                </Form.Group>
                <Button
                  variant='primary'
                  type='submit'
                  style={{
                    margin: 'auto'
                  }}
                >
                  SIGN UP
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
