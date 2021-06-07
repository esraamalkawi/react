import { DeletButtonStyled } from "../stayles";
import { FaBeer } from "react-icons/fa";

const DeletButton = (props) => {
  const handelDelete = (productId) => {
    props.deleteProducts(productId);
  };

  return (
    <DeletButtonStyled onClick={() => handelDelete(props.productId)}>
      <FaBeer />
    </DeletButtonStyled>
  );
};

export default DeletButton;
