import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("Inventory")) || [],
};

const InventorySlice = createSlice({
  name: "Inventory",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("Inventory", JSON.stringify(state.items));
    },
    updateItems: (state, action) => {
      state.items = action.payload;
      localStorage.setItem("Inventory", JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.UID !== action.payload);
      localStorage.setItem("Inventory", JSON.stringify(state.items));
    },
    clearItems: (state) => {
      state.items = [];
      localStorage.setItem("Inventory", null);
    },
  },
});

export const { addItem, removeItem, updateItems, clearItems } =
  InventorySlice.actions;

export default InventorySlice.reducer;
