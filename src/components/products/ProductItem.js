import { ProuductImage } from "../stayles";
import DeletButton from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../store/actions/productActions";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Link to={`/products/${props.product.slug}`}>
        <ProuductImage src={props.product.image} />
      </Link>
      <p>{props.product.name}</p>
      <p>{props.product.price} $</p>
      <DeletButton
        onClick={() => dispatch(deleteProduct(props.product.id))}
        // productId={props.product.id}
      />
    </div>
  );
};

export default ProductItem;
