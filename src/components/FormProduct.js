import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions";
import { useHistory } from "react-router-dom";
import { updateProduct } from "../store/actions";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const FormProduct = () => {
  const productSlug = useParams().productSlug;
  const products = useSelector((state) => state.products);
  const updatedProduct = products.find(
    (product) => product.slug === productSlug
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [product, setProduct] = useState(
    updatedProduct ?? {
      name: "",
      price: "",
      image: "",
      details: "",
    }
  );
  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // console.log(product);
    event.preventDefault();
    if (updatedProduct) dispatch(updateProduct(product));
    else dispatch(addProduct(product));
    history.push("/products");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="exampleInputEmail1">Product name</label>
        <input
          class="form-control"
          type="text"
          placeholder="product name"
          name="name"
          value={product.name}
          onChange={handleChange}
        ></input>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">product price</label>
        <input
          class="form-control"
          type="number"
          placeholder="product price"
          name="price"
          value={product.price}
          onChange={handleChange}
        ></input>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">product image adress</label>
        <input
          class="form-control"
          type="text"
          placeholder="product image"
          name="image"
          value={product.image}
          onChange={handleChange}
        ></input>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">product details</label>
        <input
          class="form-control"
          type="text"
          placeholder="product details"
          name="details"
          value={product.details}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit" class="btn btn-default">
        {updatedProduct ? "Update" : "Submit"}
      </button>
    </form>
  );
};

export default FormProduct;
