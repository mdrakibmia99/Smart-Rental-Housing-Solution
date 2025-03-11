import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  products: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {},
});

//* Products
export const orderedProductsSelector = (state: RootState) => {
  return state.cart.products;
};

export const {} = cartSlice.actions;
export default cartSlice.reducer;
