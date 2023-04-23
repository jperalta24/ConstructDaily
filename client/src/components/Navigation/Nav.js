import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import  RegisterForm from '../Users/RegisterForm'
import LoginForm from '../Users/LoginForm';

const MyNav = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {location.pathname !== '/' && (
          <li>
            <NavLink exact to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
        )}
        {location.pathname !== '/projects' && (
          <li>
            <NavLink to="/projects" activeClassName="active">
              Projects
            </NavLink>
          </li>
        )}
        {location.pathname !== '/dailylog' && (
          <li>
            <NavLink to="/dailylog" activeClassName="active">
              Daily Log
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MyNav;
