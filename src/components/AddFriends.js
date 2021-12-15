import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const AddFriend = () => {

  const { push } = useHistory();

  const [form, setForm] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    axios.post('http://localhost:9000/api/friends', form, {
      headers: {
        authentication: token
      }
    })
      .then(res => {
        push('/friends');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Add Friend</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input onChange={handleChange} name='name' type='text' />
        </div>
        <div>
          <label>Age</label>
          <input onChange={handleChange} name='age' type='text' />
        </div>
        <div>
          <label>Email</label>
          <input onChange={handleChange} name='email' type='email' />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddFriend;