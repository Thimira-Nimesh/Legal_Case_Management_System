import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import Navbar2 from "./Navbar2";

function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any necessary form validation or API calls here
    console.log(formData);
    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      Consultname: "",
      date: "",
    });
  };

  return (
    <>
      {/* <Navbar2 /> */}
      <Col md={0}>
        <div className="signup11">
          <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://i.ibb.co/F5vgckd/pp.png"
                    alt="Sample"
                    className="img-fluid"
                  />
                </div>

                <div className="col-xl-6">
                  <div className="card card-registration my-4">
                    <div className="card-body">
                      <Container>
                        <h1>Consultant Appointment Form</h1>
                        <Form onSubmit={handleSubmit}>
                          <Form.Group controlId="formName">
                            <Form.Label>
                              <strong>Name</strong>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Enter your name"
                              required
                            />
                          </Form.Group>

                          <Form.Group controlId="formEmail">
                            <Form.Label>
                              <strong>Email address</strong>
                            </Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="Enter your email"
                              required
                            />
                          </Form.Group>

                          <Form.Group controlId="formPhone">
                            <Form.Label>
                              <strong>Phone number</strong>
                            </Form.Label>
                            <Form.Control
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="Enter your phone number"
                              required
                            />
                          </Form.Group>

                          <Form.Group controlId="formConname">
                            <Form.Label>
                              <strong>Consultant Name</strong>
                            </Form.Label>
                            <Form.Control
                              type="text"
                              name="conname"
                              value={formData.conname}
                              onChange={handleInputChange}
                              placeholder="Enter your consultant name"
                              required
                            />
                          </Form.Group>

                          <Form.Group controlId="formDate">
                            <Form.Label>
                              <strong>Date</strong>
                            </Form.Label>
                            <Form.Control
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                              required
                            />
                          </Form.Group>
                          <br></br>
                          <br></br>

                          <Button
                            variant="primary"
                            type="submit"
                            className="btn btn-success w-100"
                          >
                            Make an Appointment
                          </Button>
                        </Form>
                      </Container>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Col>
    </>
  );
}

export default Appointment;
