import React, { Component } from "react";
import DisplayNavbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "../Styles/ContactForm.css";
import { Spring } from "react-spring/renderprops";
import instructions from "../Backgrounds/instructions.pdf";

class Contact extends Component {
  state = {
    name: "",
    email: "",
    picLink: "",
    picDesc: "",
    address: "",
    comment: "",
    buttonText: "Submit Form",
  };

  handleInput = (field, value) => {
    this.setState((currentState) => {
      return {
        ...currentState,
        [field]: value,
      };
    });
  };

  formSubmit = (e) => {
    e.preventDefault();

    this.setState((currentState) => {
      return {
        ...currentState,
        buttonText: "...sending",
      };
    });

    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      picLink: "",
      picDesc: "",
      address: "",
      comment: "",
      buttonText: "Form Submitted",
    });
  };

  render() {
    return (
      <div className="contact-main-div">
        {" "}
        <DisplayNavbar />
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 100 }}
        >
          {(props) => (
            <div style={props} className="contact-outer-div">
              <Container className="contact-container">
                <Row className="contact-header-row">
                  <h2>Your View</h2>
                </Row>
                <Row className="col-row">
                  <Col className="instructions-col">
                    {/* change the contact form description here */}
                    <article>
                      Kinfolk cornhole hoodie gluten-free. Forage +1 next level,
                      occupy narwhal selfies drinking vinegar deep v viral
                      disrupt taxidermy lo-fi. Palo santo poutine green juice
                      taxidermy photo booth intelligentsia. Coloring book
                      literally succulents pug asymmetrical taiyaki etsy
                      adaptogen vexillologist tote bag fashion axe gluten-free
                      banh mi. Single-origin coffee aesthetic readymade irony
                      roof party, fanny pack fashion axe church-key cold-pressed
                      glossier green juice chartreuse. Lomo single-origin coffee
                      adaptogen sartorial polaroid jianbing kinfolk ugh
                      wayfarers cornhole 3 wolf moon.
                    </article>
                    <Row className="contact-button-row download">
                      <a
                        href={instructions}
                        className="button"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Download instructions
                      </a>
                    </Row>
                  </Col>
                  <Col className="form-col">
                    <article>
                      If you have any questions, concerns or you would like to
                      get featured as an artist on our website, please fill out
                      our contact form and we will get back to you soon!
                    </article>
                    <Form
                      className="contact-form"
                      onSubmit={(e) => this.formSubmit(e)}
                    >
                      <Form.Group controlId="formGroupName">
                        <Form.Label>Name *</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="1"
                          placeholder="Enter your name here..."
                          required
                          value={this.state.name}
                          onChange={(e) =>
                            this.handleInput("name", e.target.value)
                          }
                        />
                      </Form.Group>
                      <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          required
                          value={this.state.email}
                          onChange={(e) =>
                            this.handleInput("email", e.target.value)
                          }
                        />
                      </Form.Group>
                      <Form.Group controlId="formGroupImg">
                        <Form.Label>
                          Share your file - please provide a link to your
                          submission
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="1"
                          placeholder="https://example-link-to-your-picture.com"
                          value={this.state.picLink}
                          onChange={(e) =>
                            this.handleInput("picLink", e.target.value)
                          }
                        />
                      </Form.Group>
                      <Form.Group controlId="formGroupAlt">
                        <Form.Label>
                          Visual description of upload for screen reading
                          software
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="1"
                          placeholder="Enter your picture description here..."
                          value={this.state.picDesc}
                          onChange={(e) =>
                            this.handleInput("picDesc", e.target.value)
                          }
                        />
                      </Form.Group>
                      <Form.Group controlId="formGroupAddress">
                        <Form.Label>
                          Location pin for your submission (no personal or
                          private addresses) *
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="2"
                          placeholder="1 Example Address, 1AA 2BB"
                          required
                          value={this.state.address}
                          onChange={(e) =>
                            this.handleInput("address", e.target.value)
                          }
                        />
                      </Form.Group>
                      <Form.Group controlId="formGroupMessage">
                        <Form.Label>
                          Any comments for us - these won't be published
                          anywhere!
                        </Form.Label>
                        <Form.Control
                          as="textarea"
                          rows="3"
                          placeholder="Enter your message here..."
                          value={this.state.comment}
                          onChange={(e) =>
                            this.handleInput("comment", e.target.value)
                          }
                        />
                      </Form.Group>
                      <Row className="contact-button-row">
                        <button className="button" type="submit">
                          {this.state.buttonText}
                        </button>
                      </Row>
                    </Form>
                  </Col>
                </Row>
              </Container>
            </div>
          )}
        </Spring>
      </div>
    );
  }
}

export default Contact;
