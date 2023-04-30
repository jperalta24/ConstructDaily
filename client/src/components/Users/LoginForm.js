import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../utils/mutations";
import AuthService from "../../utils/auth";
import { Navigate } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const LoginForm = (props) => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signIn] = useMutation(SIGN_IN);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Submitting form...");
    try {
      const { data } = await signIn({ variables: { email, password } });
      AuthService.login(data.signIn.token);
      setIsLoggedIn(true);
      props.onSuccess();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container className="login-container">
      <Row>
        <Col>
          <div className="login-page">
            <Form className="my-4 mx-3" onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mt-3 mb-2">Email address</Form.Label>
                <Form.Control
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label className="mt-2 mb-1">Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-2">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
