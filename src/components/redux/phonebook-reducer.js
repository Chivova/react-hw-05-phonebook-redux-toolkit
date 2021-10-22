import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContact } from './phonebook-actions';

const items = createReducer(
  JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  {
    [addContact]: (state, { payload }) => [...state, payload],

    [deleteContact]: (state, { payload }) =>
      state.filter(contact => contact.id !== payload),
  },
);

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
