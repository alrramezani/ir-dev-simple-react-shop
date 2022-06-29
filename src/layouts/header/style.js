import styled from "styled-components";

export const HeaderContainer = styled.header`
  .top {
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    .content {
      display: flex;
      align-items: center;
      height: 68px;
      .logo {
        width: 160px;
        display: flex;
        border-right: 1px solid ${({ theme }) => theme.colors.border};
        img {
          height: 30px;
        }
      }
    }
  }

  .bottom {
    border-bottom: 2px solid ${({ theme }) => theme.colors.border};
    .content {
      display: flex;
      width: 100%;
      .catalog {
        width: 160px;
        display: flex;
        border-right: 1px solid ${({ theme }) => theme.colors.border};
      }
      .right {
        padding-left: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        .search {
          border-right: 1px solid ${({ theme }) => theme.colors.border};
          width: 70%;
        }
        .profile {
        }
      }
    }
  }
  .menu {
    flex: 8;
    padding-left: 30px;
    height: 100%;
    width: 100%;
    border-left: 2px solid #ebeae5;
    border-bottom: 2px solid #ebeae5;
  }
`;
