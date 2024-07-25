import React, { useState, useRef } from "react";
import "./index.css";
import "./App.css";
function App() {
  const [form, setForm] = useState([]);
  let copiedForm = [];
  let nameValue = "";
  let emailValue = "";
  let passwordValue = "";
  let descValue = "";
  let usernameValue = "";
  function name(event) {
    nameValue = event.target.value;
  }
  function username(event) {
    usernameValue = event.target.value;
  }
  function email(event) {
    emailValue = event.target.value;
  }
  function password(event) {
    passwordValue = event.target.value;
  }
  function desc(event) {
    descValue = event.target.value;
  }
  function btn() {
    if (
      nameValue == "" ||
      usernameValue == "" ||
      emailValue == "" ||
      passwordValue == "" ||
      descValue == ""
    ) {
      alert("please fill in all inputs");
      return;
    }
    if (descValue.length == 10) {
      alert("bio must be more 10 characters");
      return;
    }

    if (passwordValue.includes(123)) {
      alert("password is too simple");
      return;
    }
    if (emailValue.includes("@gmail.com")) {
    } else {
      alert("please correct your email");
    }
    copiedForm.push(nameValue, emailValue, passwordValue, descValue);
    setForm(copiedForm);
    console.log(form);
  }
  return (
    <div className="container">
      <h1 className="heading">Create An Account</h1>
      <p className="text">
        Kindly fill the following details to create your account
      </p>
      <div className="inputs">
        <input onChange={name} placeholder="Enter your name" type="text" />
        <input onChange={email} placeholder="Enter your email" type="text" />
        <input
          onChange={username}
          placeholder="Enter our username"
          type="text"
        />
        <input onChange={password} placeholder="Enter password" type="text" />
        <textarea onChange={desc} placeholder="Your Biography"></textarea>
      </div>
      <button onClick={btn}>CREATE ACCOUNT</button>
    </div>
  );
}

export default App;
