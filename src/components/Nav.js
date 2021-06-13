import { Link } from "react-router-dom";
import { NavProduct, Logo } from "./stayles";
import lightlogo from "../lightlogo.jpg";
import darklogo from "../darklogo.png";
// const NavBar = (props) => {
//   return (
//     <nav className="navbar navbar-expand-lg">
//       <Logo to="/">
//         <img
//           src="data:image/jpeg;base64,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"
//           alt="logo"
//         />
//       </Logo>
//       <NavProduct to="/">{/* <h4></h4> */}</NavProduct>
//       <NavProduct to="/products">{/* <h4></h4> */}</NavProduct>
//       {/* <NavProduct>Products</NavProduct> */}
//       <ButtonTheme onClick={props.toggleTheme}>
//         {props.currentTheme === "light" ? "Dark" : "Light"} Mode
//       </ButtonTheme>
//     </nav>
//   );
// };

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/" className="navbar-brand">
        <img
          src={props.iconName === "Light theme" ? lightlogo : darklogo}
          alt="logo"
        />
      </Logo>
      <div className="navbar-nav ml-auto">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <NavProduct
          to="/products"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          {" "}
          product
        </NavProduct>
        {/* <ThemeButton className="nav-item" onClick={props.toggleTheme}>
              {props.currentTheme === "Light" ? "Dark" : "Light"} Mode
            </ThemeButton> */}
      </div>
    </nav>
  );
};

export default NavBar;
