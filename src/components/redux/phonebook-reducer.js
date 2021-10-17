import { combineReducers } from 'redux';

import types from './phonebook-types';

const items = (
  state = JSON.parse(window.localStorage.getItem('contacts')) ?? [],
  { type, payload },
) => {
  switch (type) {
    case types.ADD:
      return [...state, payload];

    case types.DELETE:
      return state.filter(({ id }) => id !== payload);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case types.FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
