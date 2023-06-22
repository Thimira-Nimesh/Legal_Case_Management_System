import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../Styles/Navbar2.css";
import { useNavigate } from "react-router-dom";

function LawyerNavbar() {
  //   const user2 = JSON.parse(localStorage.getItem("lawyer-info"));
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
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
            <Nav.Link href="/home" className="mx-3">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="mx-3">
              About us
            </Nav.Link>
            <NavDropdown title="Our Team" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Staff</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Lawyers</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Judges</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="mx-3 mr-2">
              More deets
            </Nav.Link>
            <NavDropdown title="user" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" onClick={logout}>
                logout
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LawyerNavbar;
