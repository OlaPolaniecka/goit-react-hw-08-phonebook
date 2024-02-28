import { useDispatch } from '@reduxjs/toolkit';
import { useAuth } from 'hooks/useAuth';
import { logOut } from 'redux/auth/operation';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
