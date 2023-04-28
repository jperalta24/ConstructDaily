import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Modal, Tab } from 'react-bootstrap';
import { Container, Button } from "@mantine/core";
import RegisterForm from '../Users/RegisterForm'
import LoginForm from '../Users/LoginForm';
import HomePage from '../../pages/HomePage';
import Auth from '../../utils/auth';

const MyNav = () => {
  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
    navigate('/');
  };
  return (
    <div className='navbar'>
    <Navbar>
      <ul className='navbar-items'>
        <li className='items' id='home'>
          <Link to="/" className="active">
            Home
          </Link>
        </li>
        <li className='items' id='projects'>
          <Link to="/projects" className="active">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/dailylog" className="active">
            Daily Log
          </Link>
        </li>
      </ul>
      <div>
        {Auth.loggedIn() ? (
          <>
            <Link className="btn btn-lg btn-info m-2" to="/profile">
              {Auth.getProfile().data.name}
            </Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="btn btn-lg btn-info m-2" to="/login">
              Login
            </Link>
            <Link className="btn btn-lg btn-light m-2" to="/signup">
              Signup
            </Link>
          </>
        )}
      </div>
    </Navbar>
  </div>
  );
};

export default MyNav;
