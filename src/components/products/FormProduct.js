import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/actions/productActions";
import { useHistory } from "react-router-dom";
import { updateProduct } from "../../store/actions/productActions";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

const FormProduct = () => {
  const productsSlug = useParams().productSlug;
  const shopId = useParams().shopId;
  const products = useSelector((state) => state.products.products);
  const updatedProduct = products.find(
    (product) => product.slug === productsSlug
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
    else dispatch(addProduct(product, shopId));
    history.push("/products");
  };

  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label for="exampleInputEmail1">Product name</label>
        <input
          className="form-control"
          type="text"
          placeholder="product name"
          name="name"
          value={product.name}
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">product price</label>
        <input
          className="form-control"
          type="number"
          placeholder="product price"
          name="price"
          value={product.price}
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">product image adress</label>
        <input
          className="form-control"
          type="file"
          placeholder="product image"
          name="image"
          onChange={handleImage}
        ></input>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">product details</label>
        <input
          className="form-control"
          type="text"
          placeholder="product details"
          name="details"
          value={product.details}
          onChange={handleChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-default">
        {updatedProduct ? "Update" : "add"}
      </button>
    </form>
  );
};

export default FormProduct;
