import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProducts: (state, action) => {
      console.log(action);
      state.products.push(action.payload);
      console.log(JSON.parse(JSON.stringify(state)));
    },
    deleteProduct: (state, action) => {
      console.log(JSON.parse(JSON.stringify(state.products)));
      console.log(action.payload);
      console.log(
        state.products.findIndex((product) => product.id === action.payload.id)
      );
      let index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      state.products.splice(index, 1);
    },
    editProduct: (state, action) => {
      console.log("ACTION IN EDITED USER", action.payload.productId);
      console.log(
        "EDITINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG in reducer",
        JSON.parse(JSON.stringify(state.products))
      );
      let index = state.products.findIndex(
        (product) => product.productId === action.payload.productId
      );
      console.log("INDEXXXXXXXXXX", index);

      state.products[index] = action.payload;
    },
  },
});

export const { addProducts, deleteProduct, editProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
