import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import "../Styles/app.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "../Firebase/firebase";
import { useDispatch } from "react-redux";
import { signup, logout } from "../features/userSlice";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          signup({
            displayName: user.displayName,
            email: user.email,
            uid: user.uid,
          })
        );
      } else {
        dispatch(logout());
        history.push("/");
      }
    });
  });

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
