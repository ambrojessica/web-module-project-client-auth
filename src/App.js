import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Link } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriends from './components/AddFriends';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';

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

        <PrivateRoute exact path='/friends' component={FriendsList} />

        <PrivateRoute exact path='/friends/add' component={AddFriends} />

        <PrivateRoute exact path='/logout' component={Logout} />
      </div>
    </Router>
  );
}

export default App;
