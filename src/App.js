import "./App.css";
import React from "react";
import { useInput } from "./hooks";

const App = () => {
  const email = useInput("", { isEmpty: true, minLength: 5, isEmail: true });
  const password = useInput("", { isEmpty: true, minLength: 8 });

  return (
    <div className="App">
      <form>
        <h1>FORM</h1>
        {email.isDirty && email.isEmpty && (
          <div style={{ color: "red" }}>Please, fill this field</div>
        )}
        {email.isDirty && email.minLengthError && (
          <div style={{ color: "red" }}>To short for real email</div>
        )}
        {email.isDirty && email.emailError && (
          <div style={{ color: "red" }}>Bruh, wrong format!</div>
        )}
        <input
          onChange={(e) => email.onChange(e)}
          value={email.value}
          onBlur={(e) => email.onBlur(e)}
          name="email"
          type="text"
          placeholder="Enter your email"
        />
        {password.isDirty && password.isEmpty && (
          <div style={{ color: "red" }}>Please, fill this field</div>
        )}
        {password.isDirty && password.minLengthError && (
          <div style={{ color: "red" }}>Password is 8 symbols minimum</div>
        )}
        <input
          onChange={(e) => password.onChange(e)}
          value={password.value}
          onBlur={(e) => password.onBlur(e)}
          name="password"
          type="password"
          placeholder="Enter your password"
        />
        <button disabled={!email.isValid || !password.isValid} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default App;
