import React, { useState } from "react";
import { Route, Routes, Link, json } from "react-router-dom";
import "../index.css";
import "../App.css";
import login from "./login";
import "./signin.css";
import "./login.css";
function signin() {
  let href = "";
  const [form, setForm] = useState([]);
  let copiedForm = [];

  let emailValue = "";
  let passwordValue = "";

  let usernameValue = "";

  function username(event) {
    usernameValue = event.target.value;
  }
  function email(event) {
    emailValue = event.target.value;
  }
  function password(event) {
    passwordValue = event.target.value;
  }
  function btn() {
    function Validate() {
      if (usernameValue == "" || emailValue == "" || passwordValue == "") {
        alert("please fill in all inputs");
        return false;
      }
      if (passwordValue.includes(123)) {
        alert("password is too simple");
        return false;
      }
      if (emailValue.includes("@gmail.com")) {
      } else {
        alert("please correct your email");
        return false;
      }
      return true;
    }
    if (Validate() == true) {
      fetch(`https://auth-rg69.onrender.com/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: usernameValue,
          email: emailValue,
          password: passwordValue,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message == "User registered successfully!") {
            document.querySelector(".signup").style.display = "none";
            document.querySelector(".login").style.display = "flex";
            document.querySelector(".login").style.justifyContent = "center";
            document.querySelector(".login").style.alignItems = "center";
            document.querySelector(".login").style.flexDirection = "column";
            document.querySelector(".login").style.width = "800px";
            document.querySelector(".login").style.height = "400px";
          }
          console.log(data);
          alert(JSON.stringify(data.message));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  function login() {
    document.querySelector(".signup").style.display = "none";
    document.querySelector(".login").style.display = "flex";
    document.querySelector(".login").style.justifyContent = "center";
    document.querySelector(".login").style.alignItems = "center";
    document.querySelector(".login").style.flexDirection = "column";
    document.querySelector(".login").style.width = "800px";
    document.querySelector(".login").style.height = "400px";
  }
  return (
    <div className=" signup">
      <h1 className="heading">Sign Up</h1>
      <p className="text">
        Kindly fill the following details to create your account
      </p>
      <div className="inputs">
        <input onChange={email} placeholder="Enter your email" type="text" />
        <input
          onChange={username}
          placeholder="Enter your username"
          type="text"
        />
        <input onChange={password} placeholder="Enter password" type="text" />
      </div>
      <div className="have">
        <p className="log-p">
          Have an acc?
          <button className="login-btn" onClick={login}>
            Login
          </button>
        </p>
      </div>
      <button onClick={btn}>Sign Up</button>
    </div>
  );
}

export default signin;
