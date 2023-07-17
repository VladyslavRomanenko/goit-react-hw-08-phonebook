import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logIn } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selector';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/contacts');
    }
  }, [isAuth, navigate]);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
