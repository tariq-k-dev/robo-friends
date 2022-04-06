import './SearchBox.scss';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='search-container'>
      <label htmlFor='search'>Search</label>
      <input
        id='search'
        className='pa3 ba b--green bg-lightest-blue br3'
        name='search'
        type='search'
        placeholder='Search robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
