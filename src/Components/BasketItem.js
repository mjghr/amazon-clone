import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { remove, update } from "../features/basketSlice";
import "../Styles/basketItem.css";

function BasketItem({ title, price, image, rating, id }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(remove(id));
    dispatch(update());
  };

  return (
    <div className="basketItem">
      <img src={image} alt="" className="basketItem__img" />
      <div className="basketItem__right">
        <h3>{title}</h3>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="basketItem__price">
                <strong>{value}</strong>
              </p>
            </>
          )}
          value={price}
          decimalScale={2}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
        <div className="basketItem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={onClick} className="basketItem__btn">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
