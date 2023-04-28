// import React, { useState } from "react";
// import { Container, Button } from "@mantine/core";
// import { LoginForm, RegisterForm, UserProfile } from "../components/Users"; // Replace with your actual components
// import "../App.css";


// const HomePage = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegisterForm, setShowRegisterForm] = useState(false);
//   const [showUser, setShowProfile] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLoginClick = () => {
//     setShowLogin(true);
//     setShowRegisterForm(false);
//     setShowProfile(false);
//   };

//   const handleRegisterClick = () => {
//     setShowLogin(false);
//     setShowRegisterForm(true);
//     setShowProfile(false);
//   };

//   const handleUserClick = () => {
//     setShowLogin(false);
//     setShowRegisterForm(false);
//     setShowProfile(true);
//   };

//   const handleLoginSuccess = () => {
//     setLoggedIn(true); // Set logged in status to true
//   };

//   return (
//     <Container className="homepage-container">
//       <div>
//         <h1>Welcome to HomePage</h1>
//       </div>
//       {loggedIn ? (
//         <UserProfile />
//       ) : (
//         <div className="home-buttons">
//           <Button className="option-btn" onClick={handleLoginClick}>
//             Login
//           </Button>
//           <Button className="option-btn" onClick={handleRegisterClick}>
//             Register
//           </Button>
//           <Button className="option-btn" onClick={handleUserClick}>
//             Profile
//           </Button>
//           {showLogin && <LoginForm onSuccess={handleLoginSuccess} />}
//           {showRegisterForm && <RegisterForm />}
//           {showUser && <UserProfile />}
//         </div>
//       )}
//     </Container>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import { Container, Button } from "@mantine/core";
import { LoginForm, RegisterForm, UserProfile } from "../components/Users";
import "../App.css";
import AuthService from "../utils/auth"; // Import AuthService
import ConstructionImage from '../images/home image.png'

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
    <div>
      <div className="homepage-container">
        <div>
          <Container id="homepage">
            <div id="welcome">
              <h1>Welcome to Construct Daily </h1>
            </div>
          </Container>
        </div>
      </div>
      <div className="logged-in">
        <div>
          {AuthService.loggedIn() ? (
            <UserProfile />
          ) : (
            <div className="not-logged-in-container">
              <div className="card mb-3">
              <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Last updated 3 mins ago
                    </small>
                  </p>
                </div>
                <img src={ConstructionImage} className="card-img-top" alt="..." />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
