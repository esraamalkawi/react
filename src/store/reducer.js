import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FETCH_PRODUCT,
  UPDATE_PRODUCT,
} from "./actions";
import slugify from "slugify";
const initialState = {
  products: [],
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
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case UPDATE_PRODUCT:
      const { updatedProduct } = action.payload;
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        ),
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
