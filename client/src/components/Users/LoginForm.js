import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../utils/mutations";
import AuthService from "../../utils/auth";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    color: 'black',
    maxWidth: 800,
    margin: 'auto',
    textAlign: 'center',
    border: '1px solid gray',
    borderRadius: 10,
    boxShadow: '2px 2px 4px rgba(0,0,0,0.3)',
    // media query for screens smaller than 768px
    '@media (maxWidth: 768px)': {
      flexDirection: 'column-reverse',
    },
  },
  // more styles here
};

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
          <div className="login-page" style={styles.container}>
            <Form className="my-4 mx-3" onSubmit={handleFormSubmit} >
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
