import { PrivateRoute } from './PrivateRoute';
import { useDispatch } from 'react-redux';
import { Layout } from 'Layout';
import { useEffect, lazy } from 'react';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from './redux/auth/operation';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('pages/Home/Home'));
const Login = lazy(() => import('pages/Login/Login'));
const Register = lazy(() => import('pages/Register/Register'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing && <div>Fetching user data</div>}

      {!isRefreshing && (
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <PrivateRoute redirectTo="/login" component={<Home />} />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute redirectTo="/" component={<Login />} />
                }
              />
              <Route
                path="/register"
                element={
                  <RestrictedRoute redirectTo="/" component={<Register />} />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute redirectTo="/login" component={<Contacts />} />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      )}
    </>
  );
};

export default App;
