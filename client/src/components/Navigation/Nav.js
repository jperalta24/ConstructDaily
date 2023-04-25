import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import  RegisterForm from '../Users/RegisterForm'
import LoginForm from '../Users/LoginForm';
import HomePage  from '../../pages/HomePage';

const MyNav = () => {
  const location = useLocation();

  return (
    <div className='navbar'>
    <Navbar>
      <ul className='home-page-items'>
        {location.pathname !== '/' && (
          <li className='items'>
            <NavLink to="/" className="active">
              Home
            </NavLink>
          </li>
        )}
        {location.pathname !== '/projects' && (
          <li className='items' id='projects'>
            <NavLink to="/projects" className="active">
              Projects
            </NavLink>
          </li>
        )}
        {location.pathname !== '/dailylog' && (
          <li>
            <NavLink to="/dailylog" className="active">
              Daily Log
            </NavLink>
          </li>
        )}
      </ul>
      <HomePage />
    </Navbar>
      </div>
  );
};

export default MyNav;
