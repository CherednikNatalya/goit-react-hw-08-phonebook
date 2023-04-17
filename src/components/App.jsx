// // import {Form} from './Form/Form'
// // import ContactsList from './User/ContactsList'
// // import {FilterByName} from './FilterByName/FilterByName'
// import { Routes, Route } from "react-router-dom";
// import Home from 'pages/Home/Home'
// // import ContactsPage from 'pages/ContactsPage/ContactsPage'
// import LoginPage  from 'components/LoginPage/LoginPage'
// import RegisterPage from 'components/RegisterPage/RegisterPage'
// import Navigation from 'components/Navigation/Navigation'
// import Layout  from 'components/Layout/Layout'

//   export const App =() => {
 
//         return (
//       <>
//       <Navigation>
//       <Routes>
      
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/register" element={<RegisterPage/>} />
//         <Route path="/login" element={<LoginPage />} />
//         {/* <Route path="/contacts" element={<ContactsPage/>} /> */}
//         </Route>
//       </Routes>
//       </Navigation>

//        {/* <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<HomePage />} />
//         <Route
//           path="/contacts"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
//           }
//         />
//         <Route
//           path="/login"
//           element={
//             <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
//           }
//         />
//         <Route
//           path="/tasks"
//           element={
//             <PrivateRoute redirectTo="/login" component={<TasksPage />} />
//           }
//         />
//       </Route>
//     </Routes> */}


//      
//     );

    
   
//   }
        


import { Routes, Route } from 'react-router-dom';
import  Layout  from 'components/Layout/Layout';
import { lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/Auth/operations';
import { selectIsRefreshing } from 'redux/Auth/selectors';
import { PrivateRoute } from 'components/PrivetRoute';
import { RestrictedRoute } from './RestrictedRoute ';

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('../pages/Contacts'));
const Login = lazy(() => import('pages/Login'));
const RegisterPage = lazy(() => import('pages/Register'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

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
            />
          }
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

  