import styled from "styled-components";

export const SearchContainer = styled.div`
  width: 100%;
  position: relative;
  input {
    background-color: ${({ theme }) => theme.colors.bg};
    border: none;
    width: 100%;
    height: 60px;
    padding: 0 30px;
    outline: none !important;
    font-size: ${({ theme }) => theme.sizes.fontlg};
  }
  .search-key {
    position: absolute;
    font-size: ${({ theme }) => theme.sizes.fontlg};
    right: 16px;
    top: 40%;
  }
`;
