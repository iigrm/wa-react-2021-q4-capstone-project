import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItemType } from "../../models/CartItemType";

const initialState: CartItemType[] = [];

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    removeItem: (state, action: PayloadAction<CartItemType>) => {
      return state.filter(
        (cart) => cart.product.id !== action.payload.product.id
      );
    },
    addOrUpdateItem: (state, action: PayloadAction<CartItemType>) => {
      const item = state.filter(
        (cart) => cart.product.id === action.payload.product.id
      );
      if (item.length > 0) {
        item[0].quantity = action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    clearItems: (state) => {
      return [];
    },
  },
});

export const { removeItem, clearItems, addOrUpdateItem } = cartSlice.actions;

export default cartSlice.reducer;
