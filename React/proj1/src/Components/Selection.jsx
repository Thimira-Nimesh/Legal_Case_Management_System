import ClientForm from "./Client-signup";
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import JudgeForm from "./Judge-signup";
import LawyerForm from "./Lawyer-signup";

export default function Selection() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (role) => {
    setSelection(role);
  };
  return (
    <div className="signup11">
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src="https://images.pexels.com/photos/8112193/pexels-photo-8112193.jpeg"
                      alt="Sample"
                      className="img-fluid"
                    />
                  </div>
                  <div className="col-xl-6">
                    <Container className="text-center mt-5">
                      <h1>Select the User type </h1>
                      <Row className="justify-content-center mt-4">
                        <Col md="auto">
                          <Button
                            variant={
                              selection === "lawyer"
                                ? "primary"
                                : "outline-primary"
                            }
                            onClick={() => handleSelection("lawyer")}
                            className="mr-3"
                          >
                            Lawyer
                          </Button>
                          <Button
                            variant={
                              selection === "client"
                                ? "primary"
                                : "outline-primary"
                            }
                            onClick={() => handleSelection("client")}
                            className="mr-3"
                          >
                            Client
                          </Button>
                          <Button
                            variant={
                              selection === "judge"
                                ? "primary"
                                : "outline-primary"
                            }
                            onClick={() => handleSelection("judge")}
                            className="mr-3"
                          >
                            Judge
                          </Button>
                        </Col>
                      </Row>
                      {selection && (
                        <Row className="mt-4">
                          <Col>
                            {selection === "lawyer" && <LawyerForm />}
                            {selection === "client" && <ClientForm />}
                            {selection === "judge" && <JudgeForm />}
                          </Col>
                        </Row>
                      )}
                    </Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
