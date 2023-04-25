import React, { useState } from 'react';
import { Container, Button } from '@mantine/core';
import { LoginForm, RegisterForm, UserProfile } from '../components/Users'; // Replace with your actual components

const HomePage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showUser, setShowProfile] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegisterForm(false);
    setShowProfile(false)
  };

  const handleRegisterClick = () => {
    setShowLogin(false);
    setShowRegisterForm(true);
    setShowProfile(false)
  };

  const handleUserClick = () => {
    setShowLogin(false);
    setShowRegisterForm(false);
    setShowProfile(true)
  };

  const handleLoginSuccess = () => {
    setLoggedIn(true); // Set logged in status to true
  };

  return (
    <Container>
      <h1>Welcome to HomePage</h1>
      {loggedIn ? (
        <UserProfile />
      ) : (
        <>
      <Button onClick={handleLoginClick}>Login</Button>
      <Button onClick={handleRegisterClick}>Register</Button>
      <Button onClick={handleUserClick}>Profile</Button>
      {showLogin && <LoginForm onSuccess={handleLoginSuccess}/>}
      {showRegisterForm && <RegisterForm />}
      {showUser && <UserProfile />}
      </>
      )}
    </Container>
  );
};

export default HomePage;