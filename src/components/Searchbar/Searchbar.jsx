import SearchForm from 'components/SearchForm';
import PropTypes from 'prop-types'
import s from './Searchbar.module.scss';

const Searchbar = ({ onSearch }) => {
  return (
    <header className={s.Searchbar}>
      <SearchForm onSearch={onSearch} />
    </header>
  )
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default Searchbar

