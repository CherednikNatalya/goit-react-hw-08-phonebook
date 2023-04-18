// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Form } from 'components/Form/Form';
import { FilterByName } from 'components/FilterByName/FilterByName';
import  ContactsList from 'components/ContactsList/ContactsList';


export default function Contacts() {


  return (
    <>
    <h1>Phonebook</h1>
    <Form />
      <h2>Contacts</h2>
    <FilterByName />
     <ContactsList/>    
    </>
    
  );
}
