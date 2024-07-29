import css from './SearchBox.module.css';
const SearchBox = ({ value, onFilter }) => {
  return (
    <>
      <h2 className={css.title}>Search</h2>
      <div className={css.wrapper}>
        <input
          placeholder="Search by name"
          className={css.input}
          type="text"
          name="search"
          value={value}
          onChange={e => onFilter(e.target.value)}
        />
      </div>
    </>
  );
};

export default SearchBox;
