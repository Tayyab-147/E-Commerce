import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { items: [] };

const InventorySlice = createSlice({
  name: "Inventory",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    updateItems: (state, action) => {
      state.items = action.payload;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.UID !== action.payload);
    },
  },
});

export const { addItem, removeItem, updateItems } = InventorySlice.actions;

export default InventorySlice.reducer;
