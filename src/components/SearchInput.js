// This component contains an input element where the user searches for the GitHub user
const SearchInput = ({searchUser, onChangeHandler, clearUserList}) => {
    return (
        <input 
          type="text" 
          value={searchUser} 
          onChange={onChangeHandler} 
          placeholder='search user'
          onBlur={clearUserList}
        />
      );
}
 
export default SearchInput;