import { ProuductImage } from "./stayles";

const ProductItem = (props) => {
  return (
    <div>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <ProuductImage src={props.product.image} />
    </div>
  );
};

export default ProductItem;
