import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { total, items } = useSelector((state) => state.cart);
  console.log({ total, items });
  if (!items.length) return null;
  return (
    <div>
      <div>
        {items.map((data, i) => (
          <div className="flex justify-around">
            <div>{data.name}</div>
            <div>{data.price}</div>
          </div>
        ))}
      </div>
      <div className="flex justify-around">
        <div>TOTAL</div>
        <div>{total}</div>
      </div>
      <div>
        <button className="bg-red-200 text-red-400 p-2">Place Order</button>
      </div>
    </div>
  );
};

export default Cart;
