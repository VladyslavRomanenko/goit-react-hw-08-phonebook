import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selector';

const Register = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(selectAuth);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    try {
      if (password.length <= 7) {
        alert('Password should be minimum 7 characters');
        setPassword('');
        return;
      }
      dispatch(register({ name, email, password }));
      setName('');
      setEmail('');
      setPassword('');
      if (isAuth) {
        navigate('/contacts');
      }
    } catch (error) {
      alert('Registration error!');
      console.log(error.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            // autoComplete="email"
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
            // autoComplete="new-password"
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

export default Register;
