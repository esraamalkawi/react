import { Link, NavLink } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const Head = styled.h1`
  font-size: xx-large;
  font-style: italic;
  font-weight: bolder;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

export const Desc = styled.p`
  text-align: center;
  font-size: larger;
  font-weight: 600;
  font-style: oblique;
  color: ${(props) => props.theme.textColor};
`;

export const Img = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;

export const ProuductImage = styled.img`
  size: 20px;
  width: 200px;
  height: 200px;
`;

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 30%;
  margin-right: 30%;
`;

export const theme = {
  light: {
    mainColor: "#005a8d",
    backgroundColor: "#fff5fd", // main background color
    textColor: "#ff96ad",
  },
  //darkblue:"#022e57"
  dark: {
    mainColor: "#005a8d",
    backgroundColor: "#232323",
    textColor: "#fdfaf6",
  },
};

export const GlobalStayle = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.backgroundColor}
}
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.black};
    background-color: ${(props) => props.theme.white};
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
`;
export const DeletButtonStyled = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

export const NavProduct = styled(NavLink)`
  color: ${(props) => props.theme.mainColor};
  padding: -20px;

  &.active {
    color: green;
  }
`;
export const Logo = styled(Link)`
  padding: -10px;

  &.img {
    width: 5%;
    height: 5%;
  }
`;

// export const ButtonsTheme = styled.button`
//   font-size: 1em;
//   margin: 1.25em;
//   padding: 0.25em 1em;
//   border-radius: 3px;
//   background-color: ${(props) => props.theme.mainColor};
// `;

export const UpdateButtonStyled = styled.button`
  background-color: #e7e7e7;
  color: black;
`;
