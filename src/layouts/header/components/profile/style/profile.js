import styled from "styled-components";

export const ProfileContainer = styled.div`
    display:flex;
        width: 100%;
        .icon_box{
        display:flex;
            border:1px solid #ebebeb; 
            align-items: center;
            justify-content: center;
            border-radius:10px;
            position:relative;
            box-sizing:border-box;
             width:38px;
                   height:38px;
                   margin-right:10px;
        }
        .count{
        top:0;
        right:0;
        transform:translate(50%,-50%);
        position:absolute;
            background:red;
                border-radius:50%;
                    display: flex;
                   width:12px;
                   height:12px;
    justify-content: center;
    align-items: center;
    color:white;
    font-size:10px;
        }
        .username{
            font-size:14px;
             margin-bottom:4px;
        }
        .balance{
          font-size:12px;
        }
`;
