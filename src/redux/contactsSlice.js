import { createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://66753e67a8d2b4d072ef3fb4.mockapi.io/contacts';
const initialContactsState = {
     items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]
}
 
const contactsSlice = createSlice({
	name: 'contacts',
	initialState: initialContactsState,
	reducers: {
        addContact: (state, { payload }) => {
            // console.log("payload>>", payload)
            state.items.push(payload)
        },
        deleteContact(state, { payload }) {
            console.log("delpayload>>", payload)
            state.items = state.items.filter(contact => contact.id !== payload)
        }
	},
})

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer
export const selectContacts = state => state.contacts.items;

//initialContactsState - 3-HW contacts.json