import { configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contactsSlice'
import { filterReducer } from './filterSlice'

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
    },
});

//export const persistor = persistStore(store)
//state => contacts => contactsReducer => 
//initialState => items



// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//   key: 'root',
//   version: 1,
//   storage,
//   whitelist: ["items"],
// }

// const persistedReducer = persistReducer(persistConfig, contactsReducer)

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),

        // contacts: persistedReducer,