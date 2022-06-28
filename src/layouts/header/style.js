import styled from "styled-components";

export const HeaderContainer = styled.header`
 
  display: flex;
  flex-direction:column;
  .logo {
  height:100%;
    flex:2;
    display: flex;
    align-items:center;
    border-bottom:2px solid #ebeae5;
    img {
      height: 40px;
    }
  }
  .top{
    display: flex;
    align-items:center;
    height: 68px;  
  }
  .bottom{
    display: flex;
    height: 68px;  
  }
  .category{
  flex:2;
  }
  .search{
    flex:8;
  }
  .menu{
  flex:8;
    height: 100%;
    width: 100%;
    border-left:2px solid #ebeae5;
    border-bottom:2px solid #ebeae5;
  }
`;
