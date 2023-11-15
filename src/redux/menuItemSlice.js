const { createSlice } = require("@reduxjs/toolkit");

const menuSlice = createSlice({
  name: "menuitem",
  initialState: {
    items: [],
  },
  reducers: {
    setMenuItems(state, actions) {
      state.items = actions.payload;
    },
  },
});

export const { setMenuItems } = menuSlice.actions;
export default menuSlice.reducer;
