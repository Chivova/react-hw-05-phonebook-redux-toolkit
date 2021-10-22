import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from '../redux/phonebook-actions';
import { getFilter } from '../redux/phonebook-selectors';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={s.filterWrapp}>
      <h2 className={s.filterTitle}>Contacts</h2>
      <label>
        <p className={s.filterText}>Find Contacts By Name</p>
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={e => dispatch(filterContact(e.target.value))}
        />
      </label>
    </div>
  );
}
