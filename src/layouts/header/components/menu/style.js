import styled from "styled-components";
export const MenuContainer = styled.nav`
  ul {
    display: ${({ status }) => (status === "v" ? "flex" : "block")};
  }
`;
export const List = styled.ul``;
