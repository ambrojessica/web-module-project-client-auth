import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Friends DataBase</h1>
          <Link to='/login'>Login</Link>
          <Link to='/friends'>Friends List</Link>
          <Link to='/friends/add'>Add Friends</Link>
          <Link to='/logout'>Log Out</Link>
        </header>

        <Route exact path='/'>
          <Login />
        </Route>

        <Route exact path='/login'>
          <Redirect to='/' />
        </Route>

        <Route exact path='/friends'>
          <FriendsList />
        </Route>

        <Route exact path='/friends/add'>
          <AddFriends />
        </Route>

        <Route exact path='/logout'>
          <Logout />
        </Route>
      </div>
    </Router>
  );
}

export default App;
