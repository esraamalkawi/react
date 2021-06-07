import { DetailWrapper } from "./stayles";
import DeletButton from "./buttons/DeleteButton";
const ProductDetail = (props) => {
  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt={props.product.name} />
      <p>{props.product.details}</p>
      <p>{props.product.price}</p>
      <button
        onClick={() => {
          props.setProduct(null);
        }}
      >
        Go back
      </button>
      <DeletButton
        deleteProducts={props.deleteProducts}
        productId={props.product.id}
      />
    </DetailWrapper>
  );
};

export default ProductDetail;
