import "./App.css";
import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("This is required field");
  const [passwordError, setPasswordError] = useState("This is required field");

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
          onBlur={(e) => blurHandler(e)}
          name="email"
          type="text"
          placeholder="Enter your email"
        />
        {passwordDirty && passwordError && <div>{passwordError}</div>}
        <input
          onBlur={(e) => blurHandler(e)}
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default App;
