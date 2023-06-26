import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../Styles/Login.css";
import "./LoginValidation";

const Login = () => {
  return (
    <div className=" gradient-border vh-60">
      <Container className=" vh-60">
        <Row className="justify-content-center">
          <Col md={6}>
            <div className="loginlogo w-45">
              <img
                width="500"
                src="https://i.ibb.co/HgB9sQM/Screenshot-2023-06-05-194339-removebg-preview.png"
                alt="Img"
                className="img-fluid2"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="login-box text-center p-4 ">
              <h1 style={{ fontFamily: "Poppins', sans-serif" }}>
                <strong>Login</strong>
              </h1>
              <br />
              <Form className="form" action="">
                <Form.Group controlId="email">
                  <Form.Label>
                    <strong>Email address</strong>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                  />
                  {/* {errors.email && (
                    <span className="text-danger">{errors.email}</span>
                  )} */}
                </Form.Group>
                <br />
                <Form.Group controlId="password">
                  <Form.Label>
                    <strong>Password</strong>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                  />
                  {/* {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )} */}
                </Form.Group>
                <br />
                <Button
                  variant="primary"
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Sign In
                </Button>
                <div className="mt-3">
                  <p>Or sign in with:</p>
                  <a
                    href="https://myaccount.google.com"
                    className="btn btn-primary ml-2"
                  >
                    Google
                  </a>
                  <a
                    href="https://web.facebook.com/home.php?_rdc=1&_rdr"
                    className="btn btn-primary"
                  >
                    Facebook
                  </a>
                </div>
                <br />
                <div>
                  <p>Don't have an account?</p>
                  <Link to="/selection" className="btn btn-secondary">
                    Sign Up
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Login;
