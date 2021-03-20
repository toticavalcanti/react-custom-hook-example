import React from 'react';
import Card from '../Card/card.component';

const User = ({ user }) => {

  return (
    <Card>
      {user ? (
        <div>
          <h3>Username: {user.username}</h3>
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
