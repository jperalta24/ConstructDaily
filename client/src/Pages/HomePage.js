import React, { useState } from 'react';
// import {
//   Container,
//   Card,
//   Button,
//   Row,
//   Col
// } from 'react-bootstrap';
// will use later for finaly JSX

import LoginForm from '../components/Users/LoginForm';
import RegisterForm from '../components/Users/RegisterForm';
import UserProfile from '../components/Users/UserProfile';
// import {}

const HomePage = () => {
  const [result, setResult] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State variable to track logged in status

  const handleButtonClick = (option) => {
    // Logic to handle button click based on option
    if (option === 'login') {
      setResult('Login button clicked');
      setLoggedIn(true); // Set logged in status to true
    } else if (option === 'register') {
      setResult('Register button clicked');
      setLoggedIn(true); // Set logged in status to true
    } else if (option === 'profile') {
      setResult('User Profile button clicked');
      setLoggedIn(true); // Set logged in status to true
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      {loggedIn ? (
        <div>
          <UserProfile />
        </div>
      ) : (
        <div>
          <button onClick={() => handleButtonClick('login')}>Login</button>
          <LoginForm />
          <button onClick={() => handleButtonClick('register')}>Register New User</button>
          <RegisterForm />
          {/* <button onClick={() => handleButtonClick('profile')}>User Profile</button> */}
        </div>
      )}
      {/* {result && <p>Result: {result}</p>} */}
    </div>
  );
};

export default HomePage;