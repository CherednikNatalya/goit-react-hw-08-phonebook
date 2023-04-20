import { Routes, Route } from 'react-router-dom';
import  Layout  from 'components/Layout/Layout';
import { lazy } from 'react';
import { useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/Auth/operations';
import { useAuth } from 'hooks';
import { PrivateRoute } from 'components/PrivetRoute';
import { RestrictedRoute } from './RestrictedRoute ';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p style={{ textAlign: 'center' }}>Loading ...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegisterPage />}
            />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
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
  );
}

  