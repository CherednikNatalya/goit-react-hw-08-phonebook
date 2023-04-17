// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Form } from 'components/Form/Form';
import { FilterByName } from 'components/FilterByName/FilterByName';
import  ContactsList from 'components/ContactsList/ContactsList';
// import { selectLoading } from 'redux/tasks/selectors';

export default function Contacts() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

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
