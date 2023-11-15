import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCartItem } from "../../../redux/cartSlice";

const MenuItemList = () => {
  const { items } = useSelector((state) => state.menuItem);
  const dispatch = useDispatch();
  if (items.lenght) return null;
  const handleAddButton = (item) => {
    dispatch(setCartItem(item));
  };
  return (
    <div>
      <div className="flex flex-grow-0 p-5">
        {items.map((data, i) => (
          <div
            className="w-20 m-2 min-h-20 bg-yellow-100 text-center"
            key={data._id}
          >
            <div>
              <p>{data.name}</p>
            </div>
            <div>
              <p>Rs. {data.price}</p>
            </div>
            <div>
              <button
                onClick={() => handleAddButton(data)}
                className="bg-green-300 text-green-600"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItemList;
