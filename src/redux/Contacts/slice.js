import {createSlice} from '@reduxjs/toolkit'
import {fetchContacts, addContact, deleteContact} from 'redux/Contacts/operations'

export const contactsSlice = createSlice({
name: 'contacs',
initialState: {
	contacts: {
        items: [
          {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        ],
        isLoading: false,
        error: null
      },
      filter: "",
      
},

extraReducers: builder => {
  builder
  .addCase(fetchContacts.pending, state =>{
    state.isLoading = true;})
  .addCase(fetchContacts.fulfilled,(state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;})
    .addCase(addContact.pending, state =>{
      state.isLoading = true;})
  .addCase(addContact.fulfilled,(state, {payload}) => {
    state.isLoading = false;
    state.error = null;
    state.items.push(payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;})
    .addCase(deleteContact.pending, state =>
      {state.isLoading = true;})
  .addCase(deleteContact.fulfilled,(state, {payload}) => {
    state.isLoading = false;
      state.error = null;
      state.items = state.items.filter(item => item.id !== payload.id);
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;})
   
},
reducers: {
  contactsSearch(state, { payload }) {
      state.filter = payload.toLowerCase();
  },
}})


export const contactsReducer = contactsSlice.reducer;
export const  {contactsSearch} = contactsSlice.actions;




