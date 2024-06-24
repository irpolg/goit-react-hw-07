import { createSlice } from '@reduxjs/toolkit'
import { fetchContacts, addContact, deleteContact } from './contactsOps'; 
import { selectNameFilter } from './filterSlice';

// axios.defaults.baseURL = 'https://66753e67a8d2b4d072ef3fb4.mockapi.io/contacts';
const initialContactsState = {
    items: [],
    isLoading: false,
    error: null,
}
 
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: initialContactsState,
    extraReducers: builder =>
        builder
            .addCase(fetchContacts.pending, state => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(addContact.pending, state => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(addContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items.push(action.payload)
            })
            .addCase(addContact.reject, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(deleteContact.pending, state => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                // state.items = state.items.filter(item => item.id !== action.payload);
                state.items = state.items.filter(contact => contact.id !== action.payload);
            })
            .addCase(deleteContact.reject, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;                
            })
    ,
});    

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filterName) => {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filterName.toLowerCase()));
})


//export const { addContact, deleteContact } = contactsSlice.actions;
        // addContact: (state, { payload }) => {
        //     // console.log("addContact - payload>>", payload)
        //     state.items.push(payload)
        // },
        // deleteContact(state, { payload }) {
        //     console.log("delpayload>>", payload)
        //     state.items = state.items.filter(contact => contact.id !== payload)
        // }
// 	}
// })


//initialContactsState - 3-HW contacts.json
//Властивість extraReducers використовується щоб оголосити 
//редюсери для «зовнішніх» типів екшенів, тобто тих, які 
//не згенеровані з властивості reducers.Оскільки ці редюсери 
//обробляють «зовнішні» екшени, для них не буде створено 
//генератори екшенів в slice.actions, 
//в цьому немає необхідності.

//Тип створених екшенів складається з рядка, зазначеного 
//першим аргументом("tasks/fetchAll"), до якого додається 
//постфікси "pending", "fulfilled" або "rejected", залежно 
//від того, який стан запиту описує екшен.
//"tasks/fetchAll/pending" - початок запиту
//"tasks/fetchAll/fulfilled" - успішне завершення запиту
//"tasks/fetchAll/rejected" - завершення запиту з помилкою