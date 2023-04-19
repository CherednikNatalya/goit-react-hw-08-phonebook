import css from './ContactsList.module.css';
import { useEffect} from 'react';
import {useDispatch, useSelector } from "react-redux";
import {deleteContact, fetchContacts} from 'redux/Contacts/operations'
import { PropTypes } from "prop-types";
import {selectFilterContacts,
  selectIsLoading, selectError
} from 'redux/Contacts/selectors'

import Button from '@mui/material/Button';

export default function ContactsList () {
  const dispatch = useDispatch();
  
  const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
  const contacts = useSelector(selectFilterContacts);
  console.log(contacts );


  useEffect (()=>{
    dispatch(fetchContacts())},
    [dispatch])

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

    return(
<>
{isLoading && <p>Loading...</p>}
			{error && <h2>ERROR</h2>}
			{!isLoading && !error &&
      (
      
      <div className={css.formStyle}>
            <ul className={css.contactsList}>
      {contacts?.map(({ id, name, number}) =>(
        <li className={css.listItem} key={id}>
          <p className={css.titleli}>
        {name}: {number}
      </p>
          <Button variant="contained"
            // className={css.addButton}
            type="button"
            onClick={() => onDeleteContact (id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
        </div>
      )}
      
  </>
)}

  ContactsList.propTypes = {
	contacts: PropTypes.arrayOf(
		PropTypes.exact({
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			number: PropTypes.string.isRequired,
		})
	),
};








 