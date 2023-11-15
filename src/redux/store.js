import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./headerSlice";
import menuItemReducer from "./menuItemSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    header: headerReducer,
    menuItem: menuItemReducer,
    cart: cartReducer,
  },
});

export default store;
