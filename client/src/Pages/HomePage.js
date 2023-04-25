import React, { useState } from "react";
import { Container, Button } from "@mantine/core";
import { LoginForm, RegisterForm, UserProfile } from "../components/Users"; // Replace with your actual components
import "../App.css";

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showUser, setShowProfile] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

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
    setLoggedIn(true); // Set logged in status to true
  };

  return (
    <Container className="homepage-container">
      <div>
        <h1>Welcome to HomePage</h1>
      </div>
      {loggedIn ? (
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
