import React, { useState } from "react";
import axios from "axios";

function Login(props) {
  const [userProfile, setUserProfile] = useState({ user: "", password: "" });
  const [message, setMessage] = useState("");

  function fieldListener(event) {
    const { value, name } = event.target;
    setUserProfile((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
    //console.log(userProfile);
  }

  function submitForm(event) {
    axios
      .post("/api/login", {
        user: userProfile.user,
        pass: userProfile.password,
      })
      .then((res) => {
        if (res.data.statusCode === 1) {
          console.log("You are logged in");
          setMessage("");
          props.listener();
        } else {
          console.log("Wrong data");
          setMessage("Wrong data");
        }
      })
      .catch((err) => {
        console.error(err.error);
      });
    event.preventDefault();
  }

  const errorStyle = {
    color: "red",
  };
  return (
    <div>
      <form onSubmit={submitForm}>
        <input
          type='text'
          placeholder='Username'
          name='user'
          onChange={fieldListener}
          value={userProfile.user}
        />
        <input
          type='password'
          placeholder='Password'
          name='password'
          onChange={fieldListener}
          value={userProfile.password}
        />
        <button type='submit'>Login</button>
      </form>
      <div style={errorStyle}>{message}</div>
    </div>
  );
}

export default Login;
