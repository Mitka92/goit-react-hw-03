import css from './SearchBox.module.css';
const SearchBox = ({ value, onFilter }) => {
  return (
    <div>
      <h2 className={css.title}>Search</h2>
      <input
        placeholder="Search by name"
        className={css.search}
        type="text"
        name="search"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
