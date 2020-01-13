import React from "react";
import { Link, withRouter } from 'react-router-dom';
import PostsLanding from "../post/PostsLanding";

import { StyleLandingContainer, StyleImgContainer, StyleFormContainer, StyleAboutHeading, StyleAboutContent, StyleJoin, StyleAlreadyHaveAccount, StyleSignInLink} from "./styles/landing.style";

const Landing = () => (
<StyleLandingContainer>
        <StyleImgContainer >
        <StyleAboutHeading>evently</StyleAboutHeading>
        <StyleAboutContent>Don't miss out on great things happening in Benalla. Easily keep track of events on in the area with evently..... </StyleAboutContent>
        <Link to={`/signup`}><StyleJoin >Join</StyleJoin></Link>
        <StyleAlreadyHaveAccount>Already have an account? <StyleSignInLink to={`/signin`}>Sign in</StyleSignInLink> </StyleAlreadyHaveAccount>
        </StyleImgContainer>
     <StyleFormContainer >
        <PostsLanding/>
    </StyleFormContainer>
</StyleLandingContainer>
)

export default withRouter(Landing);