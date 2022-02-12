import React from "react";

// This component contains the username of the individual user and the photo that we will display in typeahead
const User = ({item}) => {
    return ( 
      <div className='userBox'>
        <a href={`${item.html_url}`}  className='link' target="_blank" rel="noreferrer">
          <img className='avatar' src={item.avatar_url} alt="avatar" />
          <p className='userName'>{item.login}</p>
        </a>
    </div>  
     );
}
 
export default User;