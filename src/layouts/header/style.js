import styled from "styled-components";

export const HeaderContainer = styled.header`
  .top {
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    .content {
      display: flex;
      align-items: center;
      height: 68px;
      .logo {
        width: 15%;
        display: flex;
        height: 100%;
        align-items: center;
        border-right: 1px solid ${({ theme }) => theme.colors.border};
        img {
          height: 30px;
        }
      }
      .menu {
        padding-left: 30px;
        height: 100%;
        width: 85%;
      }
    }
  }

  .bottom {
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    .content {
      display: flex;
      align-items: center;
      height: 68px;
      .catalog {
        width: 15%;
        height: 100%;
        border-right: 1px solid ${({ theme }) => theme.colors.border};
        display: flex;
        align-items: center;
      }
      .right {
        width: 85%;
        height: 100%;
        display: flex;
        align-items: center;
        .search {
          border-right: 1px solid ${({ theme }) => theme.colors.border};
          width: 70%;
          height: 100%;
        }
        .profile {
          width: 30%;
          height: 100%;
        }
      }
    }
  }
`;
