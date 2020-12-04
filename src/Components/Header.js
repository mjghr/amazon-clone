import React from "react";
import HeaderOption from "./HeaderOption";
import "../Styles/header.css";
import SearchIcon from "@material-ui/icons/SearchTwoTone";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basketSlice";
import { selectUser } from "../features/userSlice";

function Header() {
  const basketList = useSelector(selectBasket).items;
  const user = useSelector(selectUser);

  return (
    <div className="header">
      <Link to="/">
        <img
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
          className="header__logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <HeaderOption
          user={user}
          lineOne={`Hello ${user ? user?.displayName : "Guest"}`}
          lineTwo={user ? "Logout" : "Sign In"}
          link={true}
        />
        <HeaderOption lineOne="Return" lineTwo="& Orders" />
        <HeaderOption lineOne="Your" lineTwo="Prime" />

        <Link to="/checkout">
          <div className="header__navBasket">
            <ShoppingBasketIcon />
            <span className="header__basketCount">{basketList?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
