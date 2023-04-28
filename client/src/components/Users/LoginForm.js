import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../utils/mutations";
import AuthService from "../../utils/auth";
import { Navigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
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
      // <Navigate to="/profile"/>;
      // props.onSuccess(); // Call this after the navigate function
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="login-container">
      <div className="login-page">
        <Form className="mt-4" onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit" id="login-btn">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default LoginForm;