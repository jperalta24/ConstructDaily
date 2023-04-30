// import React, { useState } from "react";
// import { Button, Container, Row, Col, Image } from "react-bootstrap";
// // import { Container, Button } from "@mantine/core";
// import {UserProfile } from "../components/Users";
// import "../App.css";
// import AuthService from "../utils/auth"; // Import AuthService
// import ConstructionImage from '../images/home image.png'

// const HomePage = () => {
//   return (
//     <div>
//         <Container id="homepage">
//       <div className="homepage-container">
//           <div id="welcome">
//             <h1>Welcome to Construct Daily </h1>
//           </div>
//       </div>
//       <div className="logged-in">
//         <div>
//           {AuthService.loggedIn() ? (
//             <UserProfile />
//             ) : (
//               // comment
//               <div className="not-logged-in-container">
//               <div className="card mb-3">
//                 <div className="card-body">
//                   <h5 className="card-title">Card title</h5>
//                   <p className="card-text">
//                     This is a wider card with supporting text below as a natural
//                     lead-in to additional content. This content is a little bit
//                     longer.
//                   </p>
//                   <p className="card-text">
//                     <small className="text-body-secondary">
//                       Last updated 3 mins ago
//                     </small>
//                   </p>
//                 </div>
//                 <img src={ConstructionImage} className="card-img-top" alt="..." />
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//           </Container>
//     </div>
//   );
// };

// export default HomePage;

import React, { useState } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
// import { Container, Button } from "@mantine/core";
import {UserProfile } from "../components/Users";
import "../App.css";
import AuthService from "../utils/auth"; // Import AuthService
import ConstructionImage from '../images/home image.png'

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
      '@media (max-width: 768px)': {
        flexDirection: 'column-reverse',
      },
    },
    // more styles here
  };

const HomePage = () => {
  return (
    <div>
        <Container id="homepage" style={styles.container}>
            <Row className="justify-content-center">
                <Col>
                    <div className="homepage-container">
                        <div id="welcome">
                            <h1>Welcome to Construct Daily </h1>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col>
                    <div className="logged-in">
                        <div>
                            {AuthService.loggedIn() ? (
                                <UserProfile />
                            ) : (
                                // comment
                                <div className="not-logged-in-container">
                                    <div className="card mb-3">
                                        <div className="card-body">
                                            
                                            <p  className="card-text" style={{ fontWeight: 'bold' }}>
                                             The ultimate solution for construction project managers. Our web application streamlines the daily logging process, making it easier than ever to manage and monitor project progress, resource usage, safety incidents, and team communication.

With ConstructDaily, you can create and manage multiple construction projects, assign users to projects, and track progress in real-time. Our user-friendly interface makes it easy to create and update daily logs for each project, including details on work completed by each worker, materials used, equipment usage, weather conditions, and more.

Whether you're working on a small renovation project or a large-scale construction site, ConstructDaily helps you optimize resource allocation and improve project efficiency. With real-time data entry, you can stay on top of project progress and make informed decisions based on up-to-date information.

Start using ConstructDaily today and experience the benefits of a comprehensive, user-focused platform for effectively managing your construction projects.
                                            </p>
                                            <p className="card-text">
                                                <small className="text-body-secondary">
                                                    
                                                </small>
                                            </p>
                                        </div>
                                        <img src={ConstructionImage} className="card-img-top" alt="..." />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default HomePage;

