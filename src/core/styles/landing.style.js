  
import styled from "styled-components";
import landingImg from "../../images/town.jpg";
import { Link } from 'react-router-dom';

export const StyleLandingContainer = styled.div`
font-family: 'Roboto', sans-serif;
display: flex; 
`;

export const StyleImgContainer = styled.div`
background: linear-gradient(
    rgba(0, 0, 0, .3),
    rgba(0, 0, 0, .3)),
    url(${landingImg}) 50% / cover;
width: 70%;
height: 100vh;
overflow: hidden;
color: white;
padding: 100px;
text-shadow: -1px 1px  solid white !important;
`;
export const StyleFormContainer = styled.div`
width: 30%;
height: 100vh;
overflow-y: scroll;
padding: 40px; 
`;
export const StyleAboutHeading = styled.h1`
font-family: 'Pacifico', cursive;
color: white;

font-size: 60px;
margin-bottom: 100px;
text-shadow: -.5px .5px 2px black;
`;
export const StyleAboutContent = styled.p`
    text-shadow: -1px 1px 5px black;
    width: 300px;
    font-weight: 300;
`;

export const StyleAlreadyHaveAccount = styled.p`
    text-shadow: -1px 1px 5px black;
    font-size: 12px;
    font-weight: 300;
    margin-top: 10px;
`;
export const StyleJoin = styled.button`

    width: 200px;
    height: 40px;
    background-color: #ffcc33;
    border-radius: 5px;
    border: none;
    box-shadow: -2px 2px 4px black;
    cursor: pointer;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
    text-shadow: -.5px .5px 1px #141414;
    &:hover{
        background-color: #fcd45f;
    }
`;
export const StyleSignInLink = styled(Link)`
    color: #ffcc33;
`;



