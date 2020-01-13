import React, { Component } from "react";
import { list } from "./apiUser";
import DefaultProfile from "../images/avatar.jpg";
import {StyleSignInButton} from "./styles/signin.style";
class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ users: data });
            }
        });
    }

    renderUsers = users => (
        <div className="row">
            {users.map((user, i) => (
                <div style={{magin: "0 40px", textAlign: "center"}} key={i}>
                    <img
                        style={{ height: "100px", width: "100px", borderRadius: "400px" }}
                        className="img-thumbnail"
                        src={`${process.env.REACT_APP_API_URL}/user/photo/${
                            user._id
                        }`}
                        onError={i => (i.target.src = `${DefaultProfile}`)}
                        alt={user.name}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text">{user.email}</p>
                        <StyleSignInButton
                            to={`/user/${user._id}`}
                            
                        >
                            View Profile
                        </StyleSignInButton>
                    </div>
                </div>
            ))}
        </div>
    );

    render() {
        const { users } = this.state;
        return (
            <div className="container">
                <h2 style={{marginTop: "100px", marginBottom: "20px"}}
                >Users</h2>
                {this.renderUsers(users)}
            </div>
        );
    }
}

export default Users;
