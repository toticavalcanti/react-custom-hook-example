import React from 'react';
import Card from '../Card/card.component';

const User = ({ user }) => {
  console.log(user)
  return (
    <Card id={user.id}>
      {user ? (
        <div>
          <h3>Username: Name {user.username}</h3>
          <p> Name: {user.name}</p>
          <p> E-mail: {user.email}</p>
          <p> City: {user.address.city}</p>
        </div>
      ) : (
        <p>Usuário não encontrado</p>
      )}
    </Card>
  );
};

export default User;
