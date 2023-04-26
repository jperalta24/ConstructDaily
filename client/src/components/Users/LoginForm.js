import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../../utils/mutations';
import AuthService from '../../utils/auth';
import { Navigate } from 'react-router-dom';


const LoginForm = (props) => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn] = useMutation(SIGN_IN);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting form...');
  

    try {
      const { data } = await signIn({ variables: { email, password } });
      AuthService.login(data.signIn.token)
      setIsLoggedIn(true);
      props.onSuccess();
      // <Navigate to="/profile"/>;
      // props.onSuccess(); // Call this after the navigate function
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
      <div>
      </div>
    </form>
  );
};

export default LoginForm;
