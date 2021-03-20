import React  from  'react';
import useFetch from '../../effects/use-fetch.effect';
import User from '../User/user.component';
import './usersGallery.css';

function UsersGallery(){

  const users = useFetch(
      `https://jsonplaceholder.typicode.com/users`
  );

  const renderUsers = (user) => {
    return(<User user={user} key={user.id} />)
  }

  return(
      <div className='container'>
        {Array.isArray(users) && users.map(renderUsers)}
      </div>
    )
}

export default UsersGallery;