import { ProuductImage } from "./stayles";
import DeletButton from "./buttons/DeleteButton";
const ProductItem = (props) => {
  return (
    <div>
      <ProuductImage
        onClick={() => props.setProduct(props.product)}
        src={props.product.image}
      />
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <DeletButton
        deleteProducts={props.deleteProducts}
        productId={props.product.id}
      />
    </div>
  );
};

export default ProductItem;
