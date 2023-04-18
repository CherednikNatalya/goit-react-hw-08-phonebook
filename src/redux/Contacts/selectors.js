import { createSelector } from '@reduxjs/toolkit';
export const selectFilter = state => state.contacts.filter
export const selectContacts = state => state.contacts.items

export const selectIsLoading=state => state.contacts.isLoading
export const  selectError=state => state.contacts.error

// export const selectFilterContacts = state =>{
//     const contacts = selectContacts(state)
//     const filter = selectFilter(state)
//     return contacts?.filter(contact =>
//             contact.name.toLowerCase().includes(selectFilter(state)))
// }



export const selectFilterContacts = createSelector(
    [selectFilter, selectContacts],
  
    (filter, contacts) =>
    contacts?.filter(contact=>
        contact.name.toLowerCase().includes(filter.toLowerCase()),
      ),
  );


 

// import { createSelector } from '@reduxjs/toolkit';

// export const selectContacts = ({ contacts }) => contacts.items;
// export const selectError = ({ contacts }) => contacts.error;
// export const selectIsLoading = ({ contacts }) => contacts.isLoading;
// export const selectFilter = ({ filter }) => filter;

// const filterNormalize = filter => filter.toLowerCase();

// export const selectFilterContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) =>
//     contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filterNormalize(filter))
//     )
// );


