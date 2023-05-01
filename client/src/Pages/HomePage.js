import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { UserProfile } from "../components/Users";
import "../App.css";
import AuthService from "../utils/auth"; // Import AuthService
import ConstructionImage from "../images/home image.png";

const styles = {
  container: {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // minHeight: '100vh', // To make sure it covers the full viewport height
    // media query for screens smaller than 768px
    "@media (maxWidth: 768px)": {
      flexDirection: "column-reverse",
    },
  },
  // more styles here
};

const HomePage = () => {
  return (
    <div>
      <Container
        fluid
        id="homepage"
        style={styles.container}
        className="no-padding-left"
      >
        <Row className="">
          <Col xs={5} className="mt-">
            <Image
              src={ConstructionImage}
              className="bg-transparent img-fluid"
              alt="..."
              fluid
            />
          </Col>
          <Col>
            <div className="logged-in mt- mx-">
              <div>
                {AuthService.loggedIn() ? (
                  <UserProfile />
                ) : (
                  // comment
                  <div className="mt-5 pt-4" style={{ fontWeight: "bold" }}>
                    <h2 className="custom-h2">Introducing ConstructDaily:</h2>
                    <ul className="custom-list">
                      <li>
                        The premier web application designed specifically for
                        construction project managers. Our platform
                        revolutionizes daily log management, making it seamless
                        to oversee project progress, resource allocation, safety
                        incidents, and team communication.
                      </li>
                      <br />
                      <li>
                        With ConstructDaily, you can effortlessly establish and
                        supervise multiple construction projects, delegate
                        users, and monitor progress in real-time. Our intuitive
                        interface simplifies the process of creating and
                        updating daily logs for every project, encompassing
                        details such as individual worker tasks, materials
                        utilized, equipment usage, weather conditions, and more.
                      </li>
                      <br />
                      <li>
                        Whether you're tackling a small-scale renovation or a
                        large construction site, ConstructDaily empowers you to
                        optimize resources and enhance project efficiency. Our
                        real-time data entry ensures you remain well-informed of
                        project developments, allowing you to make strategic
                        decisions based on the latest information.
                      </li>
                      <br />
                      <li>
                        Upgrade your construction project management experience
                        with ConstructDaily and discover the benefits of a
                        comprehensive, user-centric platform designed to
                        streamline your operations.
                      </li>
                    </ul>
                  </div>
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
