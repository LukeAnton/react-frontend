import React, { Component } from "react";
import { list } from "./apiPost";
import DefaultPost from "../images/mountains.jpg";
import { Link } from "react-router-dom";
import {StyleLogo, StyleNext} from "./styles/posts.style"
class PostsLanding extends Component {
    constructor() {
        super();
        this.state = {
            posts: [],
            page: 1
        };
    }

    loadPosts = page => {
        list(page).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ posts: data });
            }
        });
    };

    componentDidMount() {
        this.loadPosts(this.state.page);
    }

    loadMore = number => {
        this.setState({ page: this.state.page + number });
        this.loadPosts(this.state.page + number);
    };

    loadLess = number => {
        this.setState({ page: this.state.page - number });
        this.loadPosts(this.state.page - number);
    };

    renderPosts = posts => {
        return (
            <div >
                {posts.map((post, i) => {
                    const posterId = post.postedBy
                        ? `/user/${post.postedBy._id}`
                        : "";
                    const posterName = post.postedBy
                        ? post.postedBy.name
                        : " Unknown";
                    return (
                        <div key={i}>
                                <img
                                    src={`${
                                        process.env.REACT_APP_API_URL
                                    }/post/photo/${post._id}`}
                                    alt={post.title}
                                    onError={i =>
                                        (i.target.src = `${DefaultPost}`)
                                    }
                                    className="img-thunbnail mb-3"
                                    style={{ height: "200px", width: "100%", boxShadow: "-1px 1px 3px black", borderRadius: "5px" }}
                                />
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">
                                    {post.body.substring(0, 200)}.....  <Link style={{display: "inline-block", color: "#1976d2", fontWeight: "200"}}
                                    to={`/post/${post._id}`}
                                        >
                                    Read more
                                </Link>
                                </p>

                                <p style={{fontSize: "13px"}}>
                                    Posted by{" "}
                                    <Link to={`${posterId}`}>
                                        {posterName}{" "}
                                    </Link>
                                    on {new Date(post.created).toDateString()}
                                </p>
                                <hr style={{boxShadow: "-1px 1px 1px #ffcc33"}} />
                        </div>
                    );
                })}
            </div>
        );
    };

    render() {
        const { posts, page } = this.state;
        return (
            <div className="container">
            <StyleLogo>evently</StyleLogo>
                <h2 className="mt-5 mb-5">
                    {!posts.length ? "No more Events!" : "Recent Events"}
                </h2>

                {this.renderPosts(posts)}

                {page > 1 ? (
                    <button
                        className="btn btn-raised btn-warning mr-5 mt-5 mb-5"
                        onClick={() => this.loadLess(1)}
                    >
                        Previous ({this.state.page - 1})
                    </button>
                ) : (
                    ""
                )}

                {posts.length ? (
                    <StyleNext
                    
                        onClick={() => this.loadMore(1)}
                    >
                        Next ({page + 1})
                    </StyleNext>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default PostsLanding;
