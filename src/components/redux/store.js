import { configureStore } from '@reduxjs/toolkit';
import phonebookReducer from './phonebook-reducer.js';

const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,

    // работает только в режиме разбработки
    // devTools: process.env.NODE_ENV === 'development',
  },
});

export default store;
