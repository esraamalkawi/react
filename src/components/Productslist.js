import products from "../products";

const Products = () => {
  const productsList = products.map((product) => (
    <div>
      <p>{product.name}</p>
      <p>{product.price} $</p>
      <img src={product.image} className="prouduct-image" />
    </div>
  ));
  return <div className="product-list">{productsList}</div>;
};

export default Products;
