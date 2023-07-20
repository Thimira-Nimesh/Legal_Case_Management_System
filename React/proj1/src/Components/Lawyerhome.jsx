import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer";
import "../Styles/Lawyerhome.css";

export default function Lawyerhome() {
  const navigate = useNavigate();

  const viewappointments = () => {
    navigate("/viewappointment");
  };
  return (
    <div className="bg-dark lawyerpage-container">
      <div className="home-page-bg">
        <Container className="text-center mt text-white">
          <Row>
            <Col>
              <div className="dark-transparent mt-5 pt-3 pb-5">
                <div className=" justify-content-center homelogo ">
                  <img
                    src="https://i.ibb.co/WV0JGgh/15-removebg-preview.png"
                    alt="Logo"
                  />
                </div>

                <h1>Welcome to Jayawardana Associates</h1>
                <br></br>
                <p className="lead">
                  At Jayawardana Associates, we provide a wide range of legal
                  services to meet your needs. Our team of experienced attorneys
                  is dedicated to delivering exceptional results for our
                  clients.
                </p>

                <p>Phone: 011-256-7890</p>
                <p>Email: JayaAssociates@hotmail.com</p>

                <Button
                  variant="primary"
                  size="lg"
                  className="mt-4"
                  onClick={viewappointments}
                >
                  View Your Appointments
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="navfoot">
        <Footer />
      </div>
    </div>
  );
}
