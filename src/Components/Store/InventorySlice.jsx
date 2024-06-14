import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { items: [] };

const calculateSubTotal = (items) => {
  return items
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
};

const InventorySlice = createSlice({
  name: "Inventory",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      const subTotal = calculateSubTotal(state.items);
      localStorage.setItem("subTotal", subTotal);
    },
    updateItems: (state, action) => {
      state.items = action.payload;
      const subTotal = calculateSubTotal(state.items);
      localStorage.setItem("subTotal", subTotal);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.UID !== action.payload);
      const subTotal = calculateSubTotal(state.items);
      localStorage.setItem("subTotal", subTotal);
    },
  },
});

export const { addItem, removeItem, updateItems } = InventorySlice.actions;

export default InventorySlice.reducer;
