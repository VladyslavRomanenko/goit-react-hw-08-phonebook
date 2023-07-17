import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logIn } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selector';
import css from './Login.module.css';

const LoginForm = () => {
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
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.input}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={handleChange}
          placeholder="enter your email"
        />
        <input
          className={css.input}
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={handleChange}
          placeholder="enter your password"
        />

        <button className={css.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;