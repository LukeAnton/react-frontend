  
import styled from "styled-components";
import heroImg from "../../images/dashpic.jpeg";

export const StyleHero = styled.div`
background: linear-gradient(
    rgba(0, 0, 0, .5),
    rgba(0, 0, 0, .5)),
    url(${heroImg}) 50% / cover;
    padding-top: 100px;
`;

export const StyleLogo = styled.span`
font-family: 'Pacifico', cursive;
color: white;
text-shadow: -.5px .5px 2px #141414;
font-size: 35px;
`;

export const StyleWelcome = styled.span`
margin-top: 50px;
font-size: 30px;
color: white;

`;
