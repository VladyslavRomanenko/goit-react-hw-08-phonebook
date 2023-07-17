import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selector';

const User = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOut());
  };

  const user = useSelector(selectUser);
  return (
    <div>
      <p>Welcome {user?.email}</p>
      <button onClick={handleLogout} type="button">
        Logout
      </button>
    </div>
  );
};

export default User;
