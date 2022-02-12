import React from "react";
import { useEffect,  useState } from 'react';
import './App.css';
import SearchInput from './components/SearchInput'
import UsersList from './components/UsersList'

function App() {
// This state stores the user object in the array that we received from the API
const [users, setUsers] = useState([])
// This state displays the letters that written by the user in the input field
const [searchUser, setSearchUser] = useState('')

// When the user starts searching for the user in the input
// we bring information to the API and put the user object in the customer state
useEffect(() => {
  // We bring the data to the user that the user is looking for
  const fetchData = async () => { 
    fetch(`https://api.github.com/search/users?q=${searchUser}`)
    .then(res => res.json())
    .then(data => {
      setUsers(data.items)
    })
  }
   // I set a timer to prevent re-reading of each new letter 
   // also in case the user is not looking for anything, we do not bring data
  const timer = setTimeout(() => {
    searchUser ? fetchData() : setUsers([])
  }, 2000);

  return () => clearTimeout(timer)

}, [searchUser])


// This function looks at the value stored in the input and stores in searchUser state 
const onChangeHandler = (e) => { 
  setSearchUser(e.target.value) 
}

// This function is called in the onBlur of the input
// The list of users disappears when the user clicks out of the input 
const clearUserList = () => {
  setTimeout(() => {
    setUsers([])
  }, 200)   
}

// Here is the title element and  the 2 component search input and list of users
  return (
    <div className="App">
      <h1> Github Typeahead </h1>

      <div className="search">
        <SearchInput  
          searchUser={searchUser} 
          onChangeHandler={onChangeHandler} 
          setUsername={setUsers} 
          clearUserList={clearUserList}
        />
        <UsersList users={users} />
      </div>
    </div>
  );
}

export default App;
