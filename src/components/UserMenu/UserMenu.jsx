import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from '../../redux/auth/operation';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.user_menu}>
      <p className={css.user}>Welcome, {user.name}</p>
      <button
        className={css.btn_logOut}
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
