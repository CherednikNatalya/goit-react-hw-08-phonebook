import { Header} from '../Novigation/Novigation.styled.js';
import React from 'react';
import { NavLink } from 'react-router-dom';

 const Navigation = () => {
  return (
     <Header>
        
        <div>
          <NavLink to="goit-react-hw-08-phonebook/" end>Home</NavLink>
          <NavLink to="goit-react-hw-08-phonebook/contacts" end>Contacts</NavLink> 
        </div>
      </Header>
   
  );
};
export default  Navigation