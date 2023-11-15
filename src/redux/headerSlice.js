import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "header",
  initialState: {
    tabId: 1,
  },
  reducers: {
    setLiveOrderTab(state) {
      state.tabId = 2;
    },
    setTakeOrder(state) {
      state.tabId = 1;
    },
    setTabId(state, actions) {
      state.tabId = actions.payload;
    },
  },
});

export default headerSlice.reducer;
export const { setLiveOrderTab, setTakeOrder, setTabId } = headerSlice.actions;
