import React from "react";
import Posts from "../post/Posts";
import { StyleHero, StyleLogo , StyleWelcome } from "./styles/home.style";

const Home = () => (
  <div>
    <StyleHero className="jumbotron">
      <StyleWelcome className="lead">Welcome to <StyleLogo> evently </StyleLogo> . . . .</StyleWelcome>
    </StyleHero>
    <div className="container">
      <Posts />
    </div>
  </div>
);

export default Home;
