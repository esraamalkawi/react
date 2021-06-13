// import { DetailWrapper } from "./stayles";
// import DeletButton from "./buttons/DeleteButton";
// import { Redirect, useParams } from "react-router-dom";
// // import products from "../products";

// const ProductDetail = (props) => {
//   let productSlug = useParams().productSlug;
//   const product = props.products.find(
//     (product) => product.slug === productSlug
//   );
//   if (!product) return <Redirect to="/product" />;
//   return (
//     <DetailWrapper>
//       <h1>{product.name}</h1>
//       <img src={product.image} alt={product.name} />
//       <p>{product.details}</p>
//       <p>{product.price}</p>
//       {/* <button
//         onClick={() => {
//           props.setProduct(null);
//         }}
//       >
//         Go back
//       </button> */}

//       <DeletButton
//         deleteProducts={props.deleteProducts}
//         productId={product.id}
//       />
//     </DetailWrapper>
//   );
// };

// export default ProductDetail;

import { DetailWrapper, ProuductImage, UpdateButtonStyled } from "./stayles";
import { useParams, Redirect, Link } from "react-router-dom";
import DeletButton from "./buttons/DeleteButton";
import { useSelector } from "react-redux";
import { deleteProduct } from "../store/actions";
import { useDispatch } from "react-redux";

const ProductDetail = (props) => {
  const productsSlug = useParams().productsSlug;
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const product = products.find((product) => product.slug === productsSlug);
  if (!product) return <Redirect to="/" />;
  return (
    <DetailWrapper>
      <h1>{product.name}</h1>
      <ProuductImage src={product.image} alt={product.name} />
      <p>{product.details}</p>
      <p>{product.price}</p>
      <Link to="/products">
        <button>Back</button>
      </Link>
      <DeletButton
        onClick={() => dispatch(deleteProduct(product.id))}
        // productID={product.id}
      ></DeletButton>
      <Link to={`/products/${product.slug}/edit`}>
        <UpdateButtonStyled>Update product</UpdateButtonStyled>
      </Link>
    </DetailWrapper>
  );
};

export default ProductDetail;
