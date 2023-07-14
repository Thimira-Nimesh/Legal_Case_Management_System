import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/Navbar2.css";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../src/Helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../Helpers/AuthContext";

function Navbar2() {
  // const [authState, setAuthState] = useState(false);
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status: false,
  });

  const navigate = useNavigate();
  function logout() {
    localStorage.removeItem("accessToken");
    setAuthState({ ...authState, status: false });
    navigate("/");
  }

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
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
    // Add authState as a dependency
  }, [authState]);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="navbar-brand" href="">
            <img
              src="https://i.ibb.co/WV0JGgh/15-removebg-preview.png"
              alt="Logo"
              className="navlogo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/about" className="mx-3">
                About us
              </Nav.Link>
              <NavDropdown title="Our Team" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Staff</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Lawyers</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Judges</NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets" className="mx-3 mr-2">
                More deets
              </Nav.Link>
              {!authState.status ? (
                <>
                  <Nav.Link href="/home" className="mx-3">
                    Home
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={authState.username}
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    My Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </AuthContext.Provider>
  );
}

export default Navbar2;
