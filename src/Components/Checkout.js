import React from "react";
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basketSlice";
import { selectUser } from "../features/userSlice";
import "../Styles/checkout.css";
import BasketItem from "./BasketItem";
import Subtotal from "./Subtotal";

function Checkout() {
  const user = useSelector(selectUser);
  const basketItems = useSelector(selectBasket).items;

  return (
    <div className="checkout">
      <div className="checkout__left">
        <div>
          <h1 className="checkout__title">{`${user?.displayName}, Your Shopping Basket`}</h1>
          <div className="checkout__items">
            {basketItems.map(({ title, price, image, rating, id }, idx) => (
              <BasketItem
                id={id}
                key={id}
                title={title}
                image={image}
                rating={rating}
                price={price}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
