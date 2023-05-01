import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="footer-container">
      <Row>
        <Col className="text-end text-muted">
          &copy; 2023 Construct Daily. All Rights Reserved.
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
