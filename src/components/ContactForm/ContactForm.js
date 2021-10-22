import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../redux/phonebook-selectors';
import { addContact } from '../redux/phonebook-actions';
import s from './ContactForm.module.css';

export default function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  // const onSubmit = () => {
  //   dispatch(addContact(name, number));
  // };

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { value, name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() === name.toLocaleLowerCase(),
      )
    ) {
      return alert(`Name ${name} is already in contacts `);
    } else if (contacts.find(contact => contact.number === number)) {
      return alert(`Number ${number} is already in contacts `);
    }

    // onSubmit((name, number));
    dispatch(addContact(name, number));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={s.formTitle}>Phonebook</h1>
      <label>
        <p className={s.formText}>Name:</p>
        <input
          className={s.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label>
        <p className={s.formText}>Number:</p>
        <input
          className={s.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <button className={s.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
}
