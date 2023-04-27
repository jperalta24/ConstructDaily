import React, { useState } from "react";
import { Container, Button } from "@mantine/core";
import { LoginForm, RegisterForm, UserProfile } from "../components/Users";
import "../App.css";
import AuthService from "../utils/auth"; // Import AuthService

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showUser, setShowProfile] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegisterForm(false);
    setShowProfile(false);
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegisterForm(true);
    setShowProfile(false);
  };

  const handleUserClick = () => {
    setShowLogin(false);
    setShowRegisterForm(false);
    setShowProfile(true);
  };

  const handleLoginSuccess = () => {
    setShowLogin(false); // Hide login form
  };

  return (
    <Container className="homepage-container">
      <div>
        <h1>Welcome to HomePage</h1>
      </div>
      {AuthService.loggedIn() ? (
        <UserProfile />
      ) : (
        <div className="home-buttons">
          <Button className="option-btn" onClick={handleLoginClick}>
            Login
          </Button>
          <Button className="option-btn" onClick={handleRegisterClick}>
            Register
          </Button>
          <Button className="option-btn" onClick={handleUserClick}>
            Profile
          </Button>
          {showLogin && <LoginForm onSuccess={handleLoginSuccess} />}
          {showRegisterForm && <RegisterForm />}
          {showUser && <UserProfile />}
        </div>
      )}
    </Container>
  );
};

export default HomePage;

