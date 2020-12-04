import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { Alert } from "@material-ui/lab";
import "../Styles/login.css";
import { auth } from "../Firebase/firebase";

function Login() {
  const history = useHistory();
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmit = async (e) => {
    e.preventDefault();

    if (!login && passwordConfirm !== password) {
      return setError("Passwords do not match.");
    }

    setError("");
    setMessage("");

    try {
      if (!login) {
        const user = await auth.createUserWithEmailAndPassword(email, password);
        await user.user.updateProfile({ displayName: username });
        setMessage("You've created an account successfully.");
        user && history.push("/");
      } else {
        const user = await auth.signInWithEmailAndPassword(email, password);
        setMessage("You are now Logged in.");
        user && history.push("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/">
          <img
            src="https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg"
            alt=""
            className="login__logo"
          />
        </Link>
        {error && (
          <Alert severity="error">
            <h1>{error}</h1>
          </Alert>
        )}
        {message && (
          <Alert severity="success">
            <h1>{message}</h1>
          </Alert>
        )}
        <div className="login__form">
          <h1>{login ? "Sing In" : "Create account"}</h1>
          <form onSubmit={onFormSubmit}>
            {!login && (
              <>
                <h3>Your Name</h3>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </>
            )}
            <h3>Email</h3>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h3>Password</h3>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!login && (
              <>
                <h3>Re-enter Password</h3>
                <input
                  type="password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
              </>
            )}
            <button type="submit">
              {login ? "Sing In" : "Create your Amazon account"}
            </button>
            <p>
              By creating an account, you agree to Amazon's fake clone
              Conditions of Use and Privacy Notice.
            </p>
            <h4>
              {login ? "New to Amazon? " : "Already have an account? "}
              <span onClick={() => setLogin(!login)}>
                {login ? "Create-account" : "Sign-In"}
              </span>
            </h4>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
