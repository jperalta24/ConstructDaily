import React, { useState } from 'react';

// import {
//   Container,
//   Card,
//   Button,
//   Row,
//   Col
// } from 'react-bootstrap';
// will use later for finaly JSX

import LoginForm  from '../components/Users/LoginForm';
import RegisterForm  from '../components/Users/RegisterForm';
import UserProfile  from '../components/Users/UserProfile';
// import {}

const HomePage = () => {
  const [result, setResult] = useState('');

  const handleButtonClick = (option) => {
    // Removed logic to navigate from here
  };

  return (
    <div>
      <h1>Home Page</h1>
        <div>
          <button onClick={() => handleButtonClick('login')}>Login</button>
          <LoginForm />
          {/* <button onClick={() => handleButtonClick('register')}>Register New User</button> */}
          <RegisterForm />
          {/* <button onClick={() => handleButtonClick('profile')}>User Profile</button> */}
        </div>
      {/* {result && <p>Result: {result}</p>} */}
    </div>
  );
};

export default HomePage;