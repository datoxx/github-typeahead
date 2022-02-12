import React from "react";
import User from './User';

// In this component we use the map method to use the objects of individual users placed in the user array
const UsersList = ({users}) => {

    return ( 
     <div className='results'>
        {users.map(item => <User item={item} key={item.id} />)}
    </div>
     );
}
 
export default UsersList;