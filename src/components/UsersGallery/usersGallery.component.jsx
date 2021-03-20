import React, { memo } from  'react';
import useFetch from '../../effects/use-fetch.effect';
import User from '../User/user.component';
import './usersGallery.css';

function UsersGallery(){

  const users = useFetch(
      `https://jsonplaceholder.typicode.com/users`
  );
  console.log(users)

  return(
      <div className='container'>
        {Array.isArray(users) && users.map((user) => <User user={user} key={user.id} />)}
      </div>
    )
}


export default memo(UsersGallery);