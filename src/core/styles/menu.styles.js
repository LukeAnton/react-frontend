  
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyleMenuContainer = styled.div`
position: fixed;
width: 100%;
background-color: black;
font-size: 15px;
color: white;
`;

export const StyleLink = styled(Link)`
color: white;
font-weight: bold;
text-shadow: -.5px .5px 1px #141414;

&:hover{
    color: black;
}
`;
export const StyleSignOut = styled.span`
color: white;
font-weight: bold;
text-shadow: -.5px .5px 1px #141414;
&:hover{
    color: black;
}
`;

