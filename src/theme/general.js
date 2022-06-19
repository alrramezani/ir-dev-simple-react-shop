import { createGlobalStyle } from "styled-components";
import variables from "./variables";
export const GlobalStyle = createGlobalStyle`
    html,body,#root{
        width:100%;
        height:100%;
    }
    body{
        background-color: ${variables.colors.bgColor};
        
    }
`;
