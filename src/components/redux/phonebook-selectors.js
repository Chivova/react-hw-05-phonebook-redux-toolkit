const getContacts = state => state.phonebook.items;
const getFilter = state => state.phonebook.filter;

const getVisibileContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const normalizedContacts = filter.toLocaleLowerCase();

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedContacts),
  );
};

export { getContacts, getFilter, getVisibileContacts };
