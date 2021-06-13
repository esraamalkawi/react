import productsData from "../products";
import { CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT } from "./actions";
import slugify from "slugify";
const initialState = {
  products: productsData,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      const keepProduct = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: keepProduct,
      };
    case CREATE_PRODUCT:
      action.payload.newProduct.id =
        state.products[state.products.length - 1].id + 1;
      action.payload.newProduct.slug = slugify(action.payload.newProduct.name);
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
      };
    case UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;
      updatedProduct.slug = slugify(updatedProduct.name);
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };
    // const editProduct = state.products.map((product) => {
    //   if (product.id === action.payload.updatedProduct.id) return product;
    //   else return action.payload.updatedProduct;
    // });
    // return {
    //   ...state,
    //   products: state.products,
    // };
    default:
      return state;
  }
};
export default reducer;
