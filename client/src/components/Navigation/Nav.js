import { useState } from "react";
import Auth from "../../utils/auth";
import { Link, useLocation } from "react-router-dom";
import { Button, ButtonGroup, ButtonToolbar, Container, Row, Col } from "react-bootstrap";

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
    <Container className="justify-content-md-end">
      {/* <Col> */}
        {Auth.loggedIn() ? (
          <>
            {/* <ButtonGroup aria-label="Basic example"> */}
              <Button variant="custom" size="lg" href="/profile">
                Profile
              </Button>
            {/* </ButtonGroup>
            <ButtonGroup aria-label="Basic example"> */}
              <Button variant="custom" border="primary" size="lg" href="/">
                Home Page
              </Button>
              <Button variant="custom" size="lg" href="/projects">
                Project Page
              </Button>
              <Button variant="custom" size="lg" href="/dailylog">
                Dailylog Page
              </Button>
              <Button variant="custom" size="lg" onClick={logout} href="#">
                Logout
              </Button>
            {/* </ButtonGroup> */}
          </>
        ) : (
          <>
            {/* <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup aria-label="Basic example"> */}
                {location.pathname !== "/" && (
                  <Button variant="custom" size="lg" href="/">
                    Home Page
                  </Button>
                )}
              {/* </ButtonGroup> */}
              {/* <ButtonGroup aria-label="Basic example"> */}
                <Button variant="custom" size="lg" href="/signup">
                  Signup
                </Button>
                <Button variant="custom" size="lg" href="/login">
                  Login
                </Button>
              {/* </ButtonGroup> */}
            {/* </ButtonToolbar> */}
          </>
        )}
      {/* </Col> */}
    </Container>
  );
}

export default MyNav;
