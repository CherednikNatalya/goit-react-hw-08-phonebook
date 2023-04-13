import {Form} from './Form/Form'
import ContactsList from './User/ContactsList'
import {FilterByName} from './FilterByName/FilterByName'
import { Routes, Route } from "react-router-dom";
import Home from 'pages/Home/Home'
import ContactsPage from 'pages/ContactsPage/ContactsPage'
import LoginPage  from 'components/LoginPage/LoginPage'
import RegisterPage from 'components/RegisterPage/RegisterPage'
import Navigation from 'components/Navigation/Navigation'
import Layout  from 'components/Layout/Layout'

  export const App =() => {
 
        return (
      <>
      <Navigation>
      <Routes>
      <Route path="/" element={<Layout />}/>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage/>} />
      </Routes>
      </Navigation>

       {/* <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/contacts"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          }
        />
        <Route
          path="/tasks"
          element={
            <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          }
        />
      </Route>
    </Routes> */}


      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <FilterByName />
      <ContactsList/>    
      </>
    );

    
   
  }
        
   









  