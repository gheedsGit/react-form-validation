import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("This is required field");
  const [passwordError, setPasswordError] = useState("This is required field");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [emailError, passwordError])

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Insufficient value");
    } else {
      setEmailError("");
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password length 8+ is required");
      if (!e.target.value) {
        setPasswordError("Password length 8+ is required");
      }
    } else {
      setPasswordError("");
    }
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <div className="App">
      <form>
        <h1>FORM</h1>
        {emailDirty && emailError && <div>{emailError}</div>}
        <input
          onChange={(e) => emailHandler(e)}
          value={email}
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="text"
          placeholder="Enter your email"
        />
        {passwordDirty && passwordError && <div>{passwordError}</div>}
        <input
          value={password}
          onChange={(e) => passwordHandler(e)}
          onBlur={(e) => blurHandler(e)}
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button disabled={!isValid} type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
