import { Header,  Link } from 'components/Navigation/Novigation.styled';
import React from 'react';
import { useAuth } from 'hooks';
// import { Link } from 'react-router-dom';

 const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
     <Header>
        
        <div>
          <Link to="/" >Home</Link>
          {isLoggedIn && ( <Link to="/contacts">
            Contacts
            </Link> )}
        </div>
      </Header>
   
  );
};
export default  Navigation