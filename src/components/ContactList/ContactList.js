import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact } from '../redux/phonebook-actions';
import s from './ContactList.module.css';

function ContactList({ contacts, onClick }) {
  return (
    <ul className={s.contactsList}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.contactsItem} key={id}>
          {name}: {number}
          <button
            className={s.contactsBtn}
            onClick={() => onClick(id)}
            type="button"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

const getVisibileContacts = (contacts, filter) => {
  const normalizedContacts = filter.toLocaleLowerCase();

  return contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(normalizedContacts),
  );
};

// const mapStateToProps = state => {
//   const { items, filter } = state.phonebook;

//   return {
//     contacts: getVisibileContacts(items, filter),
//   };
// };

// const mapStateToProps = state => ({
//   contacts: getVisibileContacts(state.phonebook.items, state.phonebook.filter),
// });

const mapStateToProps = ({ phonebook: { items, filter } }) => {
  window.localStorage.setItem('contacts', JSON.stringify(items));

  return { contacts: getVisibileContacts(items, filter) };
};

const mapDispatchToProps = dispatch => ({
  onClick: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
  ),
  onClick: PropTypes.func.isRequired,
};
