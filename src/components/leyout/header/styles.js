import { Link } from "react-scroll";
import styled from "styled-components";

export const LogoImg = styled("img")({
  width: "80px",
  height: "auto",
});

export const Nav = styled(Link)({
  color: "#331325",
  textDecoration: "none",
  fontSize: "1rem",
  cursor: "pointer",
  "&:hover": {
    color: "#ffffff",
  },
});

{
  /*
export const DrawerWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  gap: 10,
  flexDirection: "column",
  padding: "2rem",
});
*/
}
