import { Header} from 'components/Navigation/Novigation.styled';
import React from 'react';
import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';

 const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
     <Header>
        
        <div>
          <NavLink to="/" >Home</NavLink>
          {isLoggedIn && ( <NavLink to="/contacts">
            Contacts
            </NavLink> )}
        </div>
      </Header>
   
  );
};
export default  Navigation