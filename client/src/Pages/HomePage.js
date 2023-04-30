import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { UserProfile } from "../components/Users";
import "../App.css";
import AuthService from "../utils/auth"; // Import AuthService
import ConstructionImage from "../images/home image.png";

const HomePage = () => {
  return (
    <div>
      <Container id="homepage">
        <Row className="justify-content-center">
          <Col>
            <Container className="homepage-container">
              <h1>Welcome to Construct Daily</h1>
            </Container>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <div className="logged-in">
              <div>
                {AuthService.loggedIn() ? (
                  <UserProfile />
                ) : (
                  // comment
                  <Container className="not-logged-in">
                  <Card className="card">
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </Card.Text>
                      <Card.Text>
                        <small className="text-body-secondary">
                          Last updated 3 mins ago
                        </small>
                      </Card.Text>
                    </Card.Body>
                    <Card.Img src={ConstructionImage} className="card-img-top" alt="..." />
                  </Card>
                </Container>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;