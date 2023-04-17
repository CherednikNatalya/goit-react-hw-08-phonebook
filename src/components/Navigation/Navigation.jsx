import { Header} from 'components/Navigation/Novigation.styled';
import React from 'react';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

 const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
     <Header>
        
        <div>
          <NavLink to="goit-react-hw-08-phonebook/" end>Home</NavLink>
          {isLoggedIn && ( <NavLink to="goit-react-hw-08-phonebook/contacts" end>
            Contacts
            </NavLink> )}
        </div>
      </Header>
   
  );
};
export default  Navigation