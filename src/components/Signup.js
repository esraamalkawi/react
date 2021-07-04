import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../store/actions/userActions";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // console.log(product);
    event.preventDefault();
    dispatch(createUser(user, history));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleInputEmail1">First Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="first name"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Last Name</label>
        <input
          className="form-control"
          type="text"
          placeholder="last name"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">password</label>
        <input
          className="form-control"
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Email</label>
        <input
          className="form-control"
          type="email"
          placeholder="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">username</label>
        <input
          className="form-control"
          type="text"
          placeholder="username"
          name="username"
          value={user.username}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-default">
        signup
      </button>
    </form>
  );
};
export default Signup;
