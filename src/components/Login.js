import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const { push } = useHistory();
  const [cred, setCred] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:9000/api/login', cred)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        push('/friends');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="username">
          <label>Username</label>
          <input name='username' type='text' id='username' onChange={handleChange} />
        </div>
        <div className="password">
          <label>Password</label>
          <input name='password' type='password' id='password' onChange={handleChange} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
