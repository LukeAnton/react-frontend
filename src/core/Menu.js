import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';
import { StyleMenuContainer, StyleLink , StyleSignOut} from "./styles/menu.styles";




const Menu = ({ history }) => {
  
    const isActive = (history, path) => {
        if (history.location.pathname === path) return { color: '#ff9900' };
        else return { color: '#ffffff' };
    };
    // Here is the what the component will output on the screen 
    return (
    <Fragment>
        {window.location.pathname === "/" || window.location.pathname.includes("/signup") || window.location.pathname.includes("/signin") ? null : (
            <StyleMenuContainer>
            <ul className="nav" style={{backgroundColor: "#ffcc33", position: "fixed", width: "100%", height: "50px",top: "0", paddingTop: "7px", paddingLeft: "170px", paddingRight: "150px", display: "flex", justifyContent: "space-around", zIndex: "20"}}>
            <div style={{width: "30%", display: "flex"}}>
                <li className="nav-item">
                    <StyleLink   style={{marginRight: "10px" }} to="/posts">
                    <i className="fa fa-home fa-2x"></i>
                    </StyleLink>
                </li>
                <li >
                    <StyleLink
                        className={history.location.pathname === '/users' ? 'not-active nav-link' : 'not-active nav-link'}
                        to="/users"
                    >
                        Users
                    </StyleLink>
                </li>
                <li className="nav-item">
                    <StyleLink to={`/post/create`}  className="nav-link">
                        Create Event
                    </StyleLink>
                </li>
                </div>
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <StyleLink className="nav-link" style={isActive(history, '/signin')} to="/signin">
                                Sign In
                            </StyleLink>
                        </li>
                        <li className="nav-item">
                            <StyleLink className="nav-link" style={isActive(history, '/signup')} to="/signup">
                                Sign Up
                            </StyleLink>
                        </li>
                    </Fragment>
                )}
                {isAuthenticated() && isAuthenticated().user.role === 'admin' && (
                    <li className="nav-item">
                        <StyleLink to={`/admin`} style={isActive(history, `/admin`)} className="nav-link">
                            Admin
                        </StyleLink>
                    </li>
                )}
                {isAuthenticated() && (
                    <Fragment>
                    <div style={{width: "70%", display: "flex", flexDirection: "row-reverse"}}>
                    <li className="nav-item">
                    <StyleSignOut
                        className="nav-link"
                        onClick={() => signout(() => history.push('/'))}
                    >
                        Sign Out
                    </StyleSignOut>
                </li>
                        <li className="nav-item">
                            <StyleLink
                                to={`/user/${isAuthenticated().user._id}`}
                               
                                className="nav-link"
                            >
                                {`${isAuthenticated().user.name}'s profile`}
                            </StyleLink>
                        </li>
                     
                        </div>
                    </Fragment>
                )}
            </ul>
        </StyleMenuContainer>)}
</Fragment>
     )}


export default withRouter(Menu);
