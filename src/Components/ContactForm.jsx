import React, { Component } from "react";
import DisplayNavbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../Styles/ContactForm.css";
import { Spring } from "react-spring/renderprops";

import axios from "axios";

class Contact extends Component {
  state = {
    name: "",
    message: "",
    email: "",
    sent: false,
    buttonText: "Send Message",
  };

  render() {
    return (
      <div className="contact-main-div">
        {" "}
        <DisplayNavbar
          backPath={`/`}
          customPath={"/globalmap"}
          customPathName={"Planetary View"}
        />
        <Spring
          from={{ opacity: 0, marginTop: -500 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 200 }}
        >
          {(props) => (
            <div style={props}>
              <Container className="contact-container">
                <Row className="contact-header-row">
                  <h2>Contact Form</h2>
                </Row>
                <Row className="contact-desc-row">
                  <article>
                    If you have any questions, concerns or you would like to get
                    featured as an artist on our website, please fill out our
                    contact form and we will get back to you soon!
                  </article>
                </Row>
                <Form className="contact-form">
                  <Form.Group controlId="formGroupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="1"
                      placeholder="Enter your name here..."
                    />
                  </Form.Group>
                  <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group controlId="formGroupMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows="3"
                      placeholder="Enter your message here..."
                    />
                  </Form.Group>
                  <Row className="contact-button-row">
                    <button className="button" type="submit">
                      Submit
                    </button>
                  </Row>
                </Form>
              </Container>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default Contact;
