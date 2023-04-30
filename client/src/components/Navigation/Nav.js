import { useState } from "react";
import Auth from "../../utils/auth";
import { Link, useLocation } from "react-router-dom";
import { Button, Navbar, Nav, ButtonGroup, ButtonToolbar, Container, Row, Col, Image } from "react-bootstrap";
import Logo from '../../images/ConstructDaily.png';

function MyNav({ links }) {
  const location = useLocation();
  const [active, setActive] = useState(
    links && links.length ? links[0].link : ""
  );

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    window.location.href = "/";
  };

  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="200"
            height="80"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="d-flex justify-content-between" style={{ width: "100%" }}>
            <Nav className="justify-content-start">
              {/* Logo and other content */}
            </Nav>
            <Nav className="ms-auto">
              {Auth.loggedIn() ? (
                <>
                  <Button className='nav-btn' variant="custom" size="lg" href="/profile">
                    Profile
                  </Button>
                  <Button className='nav-btn' variant="custom" border="primary" size="lg" href="/">
                    Home Page
                  </Button>
                  <Button className='nav-btn' variant="custom" size="lg" href="/projects">
                    Project Page
                  </Button>
                  <Button className='nav-btn' variant="custom" size="lg" onClick={logout} href="#">
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  {location.pathname !== "/" && (
                    <Button className='nav-btn' variant="custom" size="lg" href="/">
                      Home Page
                    </Button>
                  )}
                  <Button className='nav-btn' variant="custom" size="lg" href="/signup">
                    Signup
                  </Button>
                  <Button className='nav-btn' variant="custom" size="lg" href="/login">
                    Login
                  </Button>
                </>
              )}
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;

