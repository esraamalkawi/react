import { DeletButtonStyled } from "../stayles";
import { FaBeer } from "react-icons/fa";
import { deleteProduct } from "../../store/actions/productActions";

const DeletButton = (props) => {
  const handelDelete = (productId) => {
    console.log(productId, "helooo");
    props.deleteProducts(productId);
  };

  return (
    <DeletButtonStyled onClick={props.onClick}>
      <FaBeer />
    </DeletButtonStyled>
  );
};

export default DeletButton;
