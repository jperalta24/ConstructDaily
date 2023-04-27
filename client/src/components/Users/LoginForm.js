import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../../utils/mutations';
import AuthService from '../../utils/auth';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const LoginForm = (props) => {
  // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signIn ,{ error, data }] = useMutation(SIGN_IN);
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
    <main className="flex-row justify-center mb-4">
    <div className="col-12 col-lg-10">
      <div className="card">
        <h4 className="card-header bg-dark text-light p-2">Login</h4>
        <div className="card-body">
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
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
    )}

    {error && (
      <div className="my-3 p-3 bg-danger text-white">
        {error.message}
      </div>
    )}
  </div>
</div>
</div>
</main>
  );
};

export default LoginForm;
