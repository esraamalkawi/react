import { ProuductImage } from "./stayles";

const ProductItem = (props) => {
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <ProuductImage
        onClick={() => props.setProduct(props.product)}
        src={props.product.image}
      />
    </div>
  );
};

export default ProductItem;
