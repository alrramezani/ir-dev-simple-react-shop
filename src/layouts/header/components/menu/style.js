import styled from "styled-components";
export const MenuContainer = styled.nav`
 height:100%;
  ul {
    display: ${({ status }) => (status === "v" ? "flex" : "block")};
    align-items: center;
    justify-content:space-between;
    list-style:none;
    padding:0 0px;
    margin:0;
    height:100%;
    li{
    display:flex;
    align-items:center;
    }
  }
`;
export const List = styled.ul``;
