import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/phonebook-actions';
import { getContacts, getVisibileContacts } from '../redux/phonebook-selectors';
import s from './ContactList.module.css';

// const getVisibileContacts = (contacts, filterValue) => {
//   const normalizedContacts = filterValue.toLocaleLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLocaleLowerCase().includes(normalizedContacts),
//   );
// };

export default function ContactList() {
  // const contacts = useSelector(state => {
  //   window.localStorage.setItem(
  //     'contacts',
  //     JSON.stringify(state.phonebook.items),
  //   );
  //   return getVisibileContacts(state.phonebook.items, state.phonebook.filter);
  // });
  window.localStorage.setItem('contacts', JSON.stringify(getContacts));

  const contacts = useSelector(getVisibileContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));
  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contactsItem} key={id}>
          {name}: {number}
          <button
            className={s.contactsBtn}
            onClick={() => onDeleteContact(id)}
            type="button"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

// const mapStateToProps = state => {
//   const { items, filter } = state.phonebook;

//   return {
//     contacts: getVisibileContacts(items, filter),
//   };
// };

// const mapStateToProps = state => ({
//   contacts: getVisibileContacts(state.phonebook.items, state.phonebook.filter),
// });

// const mapStateToProps = ({ phonebook: { items, filter } }) => {
//   window.localStorage.setItem('contacts', JSON.stringify(items));

//   return { contacts: getVisibileContacts(items, filter) };
// };

// const mapDispatchToProps = dispatch => ({
//   onClick: id => dispatch(deleteContact(id)),
// });

// export default connect(mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
};
