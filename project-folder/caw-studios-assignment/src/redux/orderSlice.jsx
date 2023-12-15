import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    data: {},
  },
  reducers: {
    setOrder: (state, action) => {
      state.data = action.payload;
    },
    updateProductStatus: (state, action) => {
      const { productId, status } = action.payload;
      const product = state.data.products.find((p) => p.id === productId);
      if (product) {
        product.status = status;
      }
    },
    updateProduct: (state, action) => {
      const { productId, price, quantity, reason } = action.payload;
      const product = state.data.products.find((p) => p.id === productId);
      if (product) {
        product.price = price;
        product.quantity = quantity;
        product.reason = reason;
      }
    },
  },
});

export const { setOrder, updateProductStatus, updateProduct } =
  orderSlice.actions;
export default orderSlice.reducer;
