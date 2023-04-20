
import { Form } from 'components/Form/Form';
import { FilterByName } from 'components/FilterByName/FilterByName';
import  ContactsList from 'components/ContactsList/ContactsList';


const Contacts=() => {
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
 export default Contacts