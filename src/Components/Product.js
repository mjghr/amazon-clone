import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { add, update } from "../features/basketSlice";

import "../Styles/product.css";

function Product({ title, image, price, rating, large, id }) {
  const dispatch = useDispatch();

  const onClick = (e) => {
    e.preventDefault();
    dispatch(
      add({
        title,
        image,
        price,
        rating,
        id,
      })
    );
    dispatch(update());
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p className="product__price">
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

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <div className="product__bottom">
        <img
          src={image}
          alt=""
          className={`product__image ${large && "product__image--large"}`}
        />
        <button onClick={onClick} className="product__btn" href="#">
          add to basket
        </button>
      </div>
    </div>
  );
}

export default Product;
