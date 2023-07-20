import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/Home.css";

import { Container, Row, Col, Button } from "react-bootstrap";
import Footer from "./Footer";
import axios from "axios";
import Sidebar from "./Sidebar";

export default function Home() {
  const navigate = useNavigate();

  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/auth2", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
          navigate("/login"); // Redirect to login page if authentication fails
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
          // navigate("/home"); // Remove this line, as the user is already on the home page
        }
      });
  }, [authState.status, navigate]);

  const handleScheduleConsultation = () => {
    navigate("/appointment");
  };

  return (
    <div className="bg-dark page-container">
      <div className="home-page-bg">
        <div className="navbar5" style={{ marginTop: 0 }}>
          <p className="text-cent">Welcome Back: {authState.username}</p>
        </div>
        <Container fluid className="text-center mt-5 text-white">
          <Row>
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10}>
              <div className="dark-transparent pt-3 pb-5">
                <div className=" justify-content-center homelogo ">
                  <img
                    src="https://i.ibb.co/WV0JGgh/15-removebg-preview.png"
                    alt="Logo"
                  />
                </div>

                <h1>Welcome to Jayawardana Associates </h1>

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
                  onClick={handleScheduleConsultation}
                >
                  Schedule a Consultation
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="left-margin">
        <br></br>
        <Col md={6}>
          <div className="home-box  p-4 text-white">
            <div className="Lawhead">
              <h1>Lawyers and Consultants Specialized in Corporate Issues</h1>
            </div>
            <br></br>

            <p>
              {" "}
              Jayawardana Associates is made up of a highly qualified
              multidisciplinary team with extensive experience in the design and
              execution of legal, financial and tax strategies in accordance
              with the demands of today’s business world. We offer advisory
              services to investors in the creation of new businesses, as well
              as in the reorganization and restructuring of existing operations
              in Sri Lanka. We provide practical, efficient, and effective
              solutions, tailored to the specific needs of our clients, allowing
              them to achieve an optimal balance between competitiveness and
              compliance with all applicable laws and regulations.
            </p>
            <p>
              Whether you require assistance with personal injury claims, family
              law matters, business litigation, or estate planning, our lawyers
              have the expertise and knowledge to guide you through the legal
              process.
            </p>
            <p>
              Contact us today to schedule a consultation with one of our
              attorneys.
            </p>
          </div>
        </Col>
        <div className="iconcontainer">
          <div className="row">
            <div className="col d-flex align-items-start sp">
              <img
                src="https://i.ibb.co/1dTCwx4/call.png"
                alt="Phone Logo"
                className="logo-icon"
              />

              <div className="col d-flex flex-column align-items-start space">
                <div className="gold-text">Contact us</div>
                <div className="text-white smalltext">
                  Dial or email us your concerns
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-start space2">
              <img
                src="https://i.ibb.co/XZwgcs1/Screenshot-2023-06-18-021829.png"
                alt="Phone Logo2"
                className="logo-icon2"
              />
              <div className="col d-flex flex-column align-items-start margin1">
                <div className="gold-text">Explain Your Case</div>
                <div className="text-white smalltext">
                  Provide details of your case
                </div>
              </div>
            </div>
            <div className="col d-flex align-items-start space2">
              <img
                src="https://i.ibb.co/mD3Zcvh/Screenshot-2023-06-18-022653.png"
                alt="Phone Logo3"
                className="logo-icon3"
              />
              <div className="col d-flex flex-column align-items-start margin2 ">
                <div className="gold-text">Work with our Experts</div>
                <div className="text-white smalltext">
                  Our team of professionals will guide you
                </div>
                <br></br>
                <br></br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark dark-transparent2 ">
        <div className="dark-transparent3 vh-250  ">
          <Row className="w-100">
            <Col md={4}>
              <div className="type-box p-4 text-white mt-12">
                <div className="typehead">
                  <h1>Our Services</h1>
                </div>
                <br></br>
                <p>
                  Whether you require assistance with personal injury
                  claims,Company law matters, family law matters, business
                  litigation,Labour law matters, or estate planning, our lawyers
                  have the expertise and knowledge to guide you through the
                  legal process.lorem spdijfoashusdoaudgouashcoghasdo
                  uicholdihclohilcihal;
                </p>
                <br></br>
                <button
                  className="btn btn-warning rounded-pill viewbtn  "
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Us
                </button>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-dark mt-12 type-box2">
                <div className=" p-4 text-white d-flex flex-column align-items-center">
                  <div className="typehead2">
                    <img
                      src="https://i.ibb.co/hdh44Q4/pexels-sora-shimazaki-5668772.jpg"
                      alt="comimg"
                      className="comimg"
                    />

                    <h1 className="text-center">Corporate Law</h1>
                  </div>

                  <p className="compara">
                    Corporate law encompasses legal rules and regulations
                    governing the establishment, operation, and management of
                    corporate entities in a jurisdiction.
                  </p>

                  <button
                    className=" btn btn-warning rounded-pill justify-content-center viewbtn  "
                    onClick={() =>
                      (window.location.href =
                        "https://en.wikipedia.org/wiki/Corporate_law")
                    }
                  >
                    View more Information
                  </button>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-dark mt-12 type-box3">
                <div className=" p-4 text-white d-flex flex-column align-items-center">
                  <div className="typehead3">
                    <img
                      src="https://i.ibb.co/Q604M4M/pexels-tima-miroshnichenko-6169668.jpg"
                      alt="labimg"
                      className="labimg"
                    />

                    <h1 className="text-center">Labour Law</h1>
                  </div>

                  <p className="labpara">
                    Labour law governs the relationship between employers and
                    employees, ensuring fair treatment, worker protection, and
                    employment regulations.
                  </p>

                  <button
                    className="btn btn-warning rounded-pill justify-content-center viewbtn "
                    onClick={() =>
                      (window.location.href =
                        "https://www.britannica.com/topic/labour-law")
                    }
                  >
                    View more Information
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="w-100 r2 ">
            <Col md={3}>
              <div className="bg-dark type-box4">
                <div className=" p-4 text-white d-flex flex-column align-items-center">
                  <div className="typehead4">
                    <img
                      src="https://i.ibb.co/TvH6w6Y/pexels-gustavo-fring-4148842.jpg"
                      alt="famimg"
                      className="famimg"
                    />

                    <h1 className="text-center">Family Law</h1>
                  </div>

                  <p className="fampara">
                    Family law deals with legal matters related to family
                    relationships, including marriage, divorce, child custody,
                    and adoption.
                  </p>

                  <button
                    className="btn btn-warning rounded-pill justify-content-center viewbtn  "
                    onClick={() =>
                      (window.location.href =
                        "https://www.findlaw.com/hirealawyer/choosing-the-right-lawyer/family-law.html")
                    }
                  >
                    View more Information
                  </button>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-dark type-box5">
                <div className=" p-4 text-white d-flex flex-column align-items-center">
                  <div className="typehead5">
                    <img
                      src="https://i.ibb.co/QbqVvwW/pexels-kelly-4570690.jpg"
                      alt="civilimg"
                      className="civilimg"
                    />

                    <h1 className="text-center">Civil Law</h1>
                  </div>

                  <p className="civilpara">
                    Civil law governs non-criminal disputes between individuals
                    or organizations, addressing issues like contracts,
                    property, and personal injury.
                  </p>

                  <button
                    className="btn btn-warning rounded-pill justify-content-center viewbtn "
                    onClick={() =>
                      (window.location.href =
                        "https://en.wikipedia.org/wiki/Civil_law_(legal_system)")
                    }
                  >
                    View more Information
                  </button>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-dark type-box6">
                <div className=" p-4 text-white d-flex flex-column align-items-center">
                  <div className="typehead6">
                    <img
                      // src="https://i.ibb.co/0t8Ps1S/pexels-kindel-media-7773260.jpg"
                      src="https://i.ibb.co/XshjFTZ/pexels-kindel-media-7714892.jpg"
                      alt="crimimg"
                      className="crimimg"
                    />

                    <h1 className="text-center">Criminal Law</h1>
                  </div>

                  <p className="crimpara">
                    Criminal law focuses on offenses against society,
                    prosecuting individuals for crimes such as theft, assault,
                    and murder.
                  </p>

                  <button
                    className="btn btn-warning rounded-pill justify-content-center viewbtn "
                    onClick={() =>
                      (window.location.href =
                        "https://en.wikipedia.org/wiki/Criminal_law")
                    }
                  >
                    View more Information
                  </button>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="w-100 r3 ">
            <Col md={3}>
              <div className="bg-dark type-box7">
                <div className=" p-4 text-white d-flex flex-column align-items-center">
                  <div className="typehead7">
                    <img
                      src="https://i.ibb.co/h7DkhyW/pexels-sora-shimazaki-5935794.jpg"
                      alt="cybimg"
                      className="cybimg"
                    />

                    <h1 className="text-center">Cyber Law</h1>
                  </div>

                  <p className="cybpara">
                    Cyber law encompasses legal regulations for online
                    activities, covering issues such as data privacy,
                    cybercrime, and digital transactions.
                  </p>

                  <button
                    className="btn btn-warning rounded-pill justify-content-center viewbtn "
                    onClick={() =>
                      (window.location.href =
                        "https://en.wikipedia.org/wiki/IT_law")
                    }
                  >
                    View more Information
                  </button>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-dark type-box8">
                <div className=" p-4 text-white d-flex flex-column align-items-center">
                  <div className="typehead8">
                    <img
                      src="https://i.ibb.co/ZBFX34V/pexels-arnesh-yadram-1046209.jpg"
                      alt="envimg"
                      className="envimg"
                    />

                    <h1 className="text-center">Environmental Law</h1>
                  </div>

                  <p className="envpara">
                    Environmental law aims to protect and regulate the
                    environment, addressing issues like pollution, conservation,
                    and sustainable practices.
                  </p>

                  <button
                    className="btn btn-warning rounded-pill justify-content-center viewbtn "
                    onClick={() =>
                      (window.location.href =
                        "https://en.wikipedia.org/wiki/Environmental_law")
                    }
                  >
                    View more Information
                  </button>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="bg-dark type-box9">
                <div className=" p-4 text-white d-flex flex-column align-items-center">
                  <div className="typehead9">
                    <img
                      src="https://i.ibb.co/Fzv5Znh/pexels-andrea-piacquadio-3769118.jpg"
                      alt="intimg"
                      className="intimg"
                    />

                    <h1 className="text-center">International Law</h1>
                  </div>

                  <p className="intpara">
                    International law governs relations between nations,
                    covering treaties, diplomatic interactions, human rights,
                    and resolution of international disputes.
                  </p>

                  <button
                    className="btn btn-warning rounded-pill justify-content-center viewbtn "
                    onClick={() =>
                      (window.location.href =
                        "https://en.wikipedia.org/wiki/International_law")
                    }
                  >
                    View more Information
                  </button>
                </div>
              </div>
            </Col>
          </Row>
          <div className="navfoot">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
