const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    setCartItem(state, actions) {
      const items = actions.payload;
      const price = items.price;
      state.items = [...state.items, items];
      state.total = state.total + price;
    },
  },
});

export const { setCartItem } = cartSlice.actions;
export default cartSlice.reducer;
