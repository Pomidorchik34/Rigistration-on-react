import React, { useState } from "react";
import "../App.css";
import "./login.css";
import "./signin.css";

function login() {
  const [form, setForm] = useState([]);
  let copiedForm = [];

  let passwordValue = "";

  let usernameValue = "";

  function username(event) {
    usernameValue = event.target.value;
  }
  function password(event) {
    passwordValue = event.target.value;
  }
  function btn() {
    if (usernameValue == "" || passwordValue == "") {
      alert("please fill in all inputs");
      return;
    }

    if (passwordValue.includes(123)) {
      alert("password is too simple");
      return;
    }

    fetch(`https://auth-rg69.onrender.com/api/auth/signin`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username: usernameValue,
        password: passwordValue,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(JSON.stringify(data));
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    alert("success");
  }
  function signin() {
    document.querySelector(".login").style.height = "0px";
    document.querySelector(".login").style.display = "none";
    document.querySelector(".signup").style.display = "flex";
    document.querySelector(".signup").style.height = "0px";
    document.querySelector(".signup").style.height = "400px";
    document.querySelector(".signup").style.justifyContent = "center";
    document.querySelector(".signup").style.alignItems = "center";
    document.querySelector(".signup").style.flexDirection = "column";
    document.querySelector(".signup").style.width = "800px";
  }
  return (
    <div className="login">
      <h1 className="heading">Log in</h1>
      <p className="text">Please fill in all inputs</p>
      <div className="inputs">
        <input
          onChange={username}
          placeholder="Enter your username"
          type="text"
        />
        <input onChange={password} placeholder="Enter password" type="text" />
      </div>
      <p className="log-p">
        Haven't an acc?
        <button className="login-btn" onClick={signin}>
          Signin
        </button>
      </p>
      <button className="log" onClick={btn}>
        Log in
      </button>
    </div>
  );
}

export default login;
