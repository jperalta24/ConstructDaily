import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_IN } from './path/to/mutations';
import AuthService from '../../utils/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn] = useMutation(SIGN_IN);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await signIn({ variables: { email, password } });
      AuthService.login(data.signIn.token);
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
    </form>
  );
};

export default LoginForm;
