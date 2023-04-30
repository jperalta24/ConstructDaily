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

const HomePage = () => {
  return (
    <div>
        <Container id="homepage">
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
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default HomePage;

