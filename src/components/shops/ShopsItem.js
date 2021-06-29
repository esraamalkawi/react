import { ProuductImage } from "../stayles";
// import DeletButton from "../buttons/DeleteButton";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
//import { deleteShop } from "../../store/actions/shopActions";

const ShopItem = (props) => {
  // const dispatch = useDispatch();
  return (
    <div>
      <Link to={`/shops/${props.shop.slug}`}>
        <ProuductImage src={props.shop.image} />
      </Link>
      <p>{props.shop.name}</p>

      {/* <DeletButton onClick={() => dispatch(deleteShop(props.shop.id))} /> */}
    </div>
  );
};

export default ShopItem;
