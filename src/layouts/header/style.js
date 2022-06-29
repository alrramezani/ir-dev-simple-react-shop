import styled from "styled-components";

export const HeaderContainer = styled.header`

  display: flex;
  flex-direction:column;
  .logo {
      padding-right: 30px;
  height:100%;
    flex:2;
    display: flex;
    align-items:center;
    justify-content: right;
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
    border-bottom: 1px solid #ebebeb;
  }
  .catalog{
      padding-right: 30px;
  flex:2;
      display: flex;
    align-items: center;
    justify-content: right;
    border-right: 1px solid #ebebeb;
  }
  .right{
    flex:8;
        padding-left: 30px;
      display: flex;
    align-items: center;
    justify-content: center;
  }
  .search{
  padding-right:30px;
  flex:8;

   border-right:1px solid #ebebeb; 
    height: 100%;
     display: flex;
    align-items: center;
  }
    .profile{
     padding-left:  30px;
    flex:2;
  }
  .menu{
  flex:8;
      padding-left:  30px;
    height: 100%;
    width: 100%;
    border-left:2px solid #ebeae5;
    border-bottom:2px solid #ebeae5;
  }
`;
