import { Link } from "react-router-dom";
import React from "react";
import "../Styles/HeaderOption.css";
import { auth } from "../Firebase/firebase";

function HeaderOption({ lineOne, lineTwo, link, user }) {
  const logout = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="headerOption">
      <span className="headerOption__one">{lineOne}</span>
      {link ? (
        <Link to={user ? "/" : "/login"}>
          <span onClick={logout} className="headerOption__two">
            {lineTwo}
          </span>
        </Link>
      ) : (
        <span className="headerOption__two">{lineTwo}</span>
      )}
    </div>
  );
}

export default HeaderOption;
