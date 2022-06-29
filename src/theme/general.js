import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    html,body,#root{
        width:100%;
        height:100%;
    }
    body{
        background-color: ${({ theme }) => theme.colors.bg};
        margin:0;
    }
    p{
        margin:0;
    }
    .container{
        max-width:1200px;
        width:100% ;
        margin:auto ;
    }
`;
