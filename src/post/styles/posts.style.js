  
import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyleLogo = styled.h2`
font-family: 'Pacifico', cursive;
color: #ffcc33;
text-shadow: -.5px .5px 2px #141414;
`;

export const StyleNext = styled.button`
    width: 200px;
    height: 40px;
    background-color: #ffcc33;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
    cursor: pointer;
    color: white;
    text-shadow: -.5px .5px 1px #141414;
    &:hover{
        background-color: #fcd45f;
    }
`;
export const StylePostButton = styled.button`
    width: 150px;
    height: 30px;
    margin-top: 10px;
    background-color: #ffcc33;
    border-radius: 5px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
    cursor: pointer;
    color: white;
    text-shadow: -.5px .5px 1px #141414;
    &:hover{
        background-color: #fcd45f;
    }
`;
export const StyleTrash = styled.button`
    width: 30px;
    height: 30px;
    margin-left: 15px;
    margin-top: 10px;
    background-color: rgb(244, 67, 54);
    border-radius: 100px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
    cursor: pointer;
    color: white;
    &:hover{
        /* background-color: #fcd45f; */
    }
`;
export const StyleUpdate = styled.button`
    width: 30px;
    height: 30px;
    margin-left: 15px;
    margin-top: 10px;
    background-color: rgb(76, 175, 80);
    border-radius: 100px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
    cursor: pointer;
    color: white;
    &:hover{
        /* background-color: #fcd45f; */
    }
`;
export const StyleBack = styled.button`
    width: 30px;
    height: 30px;
    margin-top: 10px;
    background-color: rgb(25, 118, 210);
    border-radius: 100px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 2px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px;
    cursor: pointer;
    color: white;
    &:hover{
        /* background-color: #fcd45f; */
    }
`;
export const StyleCardLink = styled(Link)`
    &:hover{
        text-decoration: none;
    }
`;
