import React from 'react';
import UsersGallery from './components/UsersGallery/usersGallery.component';
//import User from './components/user/user.component';
//import Post from './components/Post/post.component';

import './App.css';

const App = props => {
  return (
    <div className='App'>
      <UsersGallery />
      {/* <Post postId={15} /> */}
    </div>
  );
};

export default App;
