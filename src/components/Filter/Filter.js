import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filter } from '../redux/phonebook-actions';
import s from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <div className={s.filterWrapp}>
      <h2 className={s.filterTitle}>Contacts</h2>
      <label>
        <p className={s.filterText}>Find Contacts By Name</p>
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = disphatch => ({
  onChange: e => disphatch(filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
