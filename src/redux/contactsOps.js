import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = "https://66753e67a8d2b4d072ef3fb4.mockapi.io";

export const fetchContacts = createAsyncThunk(
    "contacts/fetchContacts",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("/contacts");
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
});

export const addContact = createAsyncThunk(
    "contacts/addContact",
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post("/contacts", newContact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    "contacts/deleteContact",
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

//Redux Toolkit спрощує процес оголошення асинхронного 
//генератора екшену за допомогою функції createAsyncThunk().
//Першим аргументом вона приймає тип екшену, а другим функцію, 
//яка повинна виконати HTTP - запит і повернути проміс 
//із даними, які стануть значенням payload.
//Вона повертає асинхронний генератор екшену(операцію) 
//при запуску якого виконається функція з кодом запиту.