import React from "react";
import CurrencyFormat from "react-currency-format";
import { useSelector } from "react-redux";
import { selectBasket } from "../features/basketSlice";
import "../Styles/subtotal.css";

function Subtotal() {
  const basket = useSelector(selectBasket);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.items.length} items): <strong>{value}</strong>{" "}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        value={basket.totalPrice}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button className="subtotal__btn">proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
