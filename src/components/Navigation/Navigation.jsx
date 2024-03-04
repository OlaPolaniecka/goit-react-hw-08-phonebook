import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.home} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.contacts} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
