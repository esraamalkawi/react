import { DetailWrapper, ProuductImage, UpdateButtonStyled } from "../stayles";
import { useParams, Redirect, Link } from "react-router-dom";
import Productslist from "../products/Productslist";
// import DeletButton from "../buttons/DeleteButton";
import { useSelector } from "react-redux";
// import { deleteShop } from "../../store/actions/shopActions";
// import { useDispatch } from "react-redux";

const ShopDetail = () => {
  const shopId = useParams().shopId;
  console.log(useParams().shopId);
  //   const shopsSlug = useParams().shopsSlug;
  //   const dispatch = useDispatch();
  const shops = useSelector((state) => state.shops.shops);
  const shop = shops.find((shop) => shop.id === +shopId);
  //console.log(shopId);
  if (!shop) return <Redirect to="/" />;

  return (
    <div>
      <DetailWrapper>
        <h1>{shop.name}</h1>
        <ProuductImage src={shop.image} alt={shop.name} />
        <Link to="/shops">
          <button>Back</button>
        </Link>
        {/* <DeletButton
        onClick={() => dispatch(deleteShop(shop.id))}
        // shopID={shop.id}
      ></DeletButton> */}
        {/* <Link to={`/shops/${shop.slug}/edit`}>
          <UpdateButtonStyled>Update shop</UpdateButtonStyled>
        </Link> */}
        <Link to={`/shops/${shop.id}/products/new`}>
          <UpdateButtonStyled>add product</UpdateButtonStyled>
        </Link>
      </DetailWrapper>
      <div className="col-12">
        <Productslist products={shop.products} />
      </div>
    </div>
  );
};

export default ShopDetail;
