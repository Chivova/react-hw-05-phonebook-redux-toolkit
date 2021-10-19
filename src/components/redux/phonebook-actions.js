import { createAction } from '@reduxjs/toolkit';
import types from './phonebook-types';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction(types.ADD, (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction(types.DELETE);

const filter = createAction(types.FILTER);

export { addContact, deleteContact, filter };
