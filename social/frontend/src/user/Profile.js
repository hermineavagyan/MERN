import React, { Component } from "react";
import { isAuthenticated } from '../authentication';
import { Redirect, Link } from 'react-router-dom';
import DefaultProfileImage from '../images/avatar.jpg';
import { read } from './getUser';
import DeleteUser from "./DeleteUser";
import FollowProfileButton from "./FollowProfileButton";
import ProfileTabs from "./ProfileTabs";
import { postsListByUser } from "../post/apiPost"

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            user: { following: [], followers: [] },
            redirectToSignin: false,
            following: false,
            error: "",
            posts: []
        }
    }
    //check follow or not
    checkFollow = user => {
        const jwt = isAuthenticated();
        const match = user.followers.find(follower => {
            return follower._id === jwt.user._id
        })
        //one id has many ids (followers) and vice versa
        return match
    };

    clickFollowButton = callApi => {
        const userId = isAuthenticated().user._id;
        //const userId = this.props.match.params.userId;
        const token = isAuthenticated().token;
        callApi(userId, token, this.state.user._id)
            .then(data => {
                if (data.error) {
                    this.setState({ error: data.error })
                } else {
                    this.setState({ user: data, following: !this.state.following })
                }
            })
    };

    init = (userId) => {
        const token = isAuthenticated().token;
        read(userId, token)
            .then(data => {
                if (data.error) {
                    this.setState({ redirectToSignin: true })
                    console.log("Error")
                }
                else {
                    let following = this.checkFollow(data)
                    this.setState({ user: data, following: following });
                    this.loadPosts(data._id)
                }
            })

    };

    loadPosts = (userId) => {
        const token = isAuthenticated().token;
        postsListByUser(userId, token).then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                this.setState({ posts: data })
            }
        })
    }
    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.init(userId)

    };
    componentWillReceiveProps(props) {
        const userId = props.match.params.userId;
        this.init(userId)

    }
    render() {

        const { redirectToSignin, user, posts } = this.state;

        if (redirectToSignin) {
            return <Redirect to="/signin" />
        }
        const photoUrl = user._id ?
            `http://localhost:8080/user/photo/${user._id}?${new Date().getTime()}`
            : DefaultProfileImage
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Profile</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img
                            style={{ height: "200px", width: "auto" }}
                            className="img-thumbnail"
                            src={photoUrl}
                            onError={i => (i.target.src = `${DefaultProfileImage}`)}
                            alt={user.name}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="lead mt-2">
                            <p>Hello {user.name}</p>
                            <p>Email: {user.email}</p>
                            <p>{`Joined:  ${new Date(
                                user.created
                            ).toDateString()}`}
                            </p>
                        </div>
                        {isAuthenticated().user && isAuthenticated().user._id === user._id ? (
                            <div className="d-inline-block">
                                <Link
                                    className="btn btn-raised btn-info mr-5"
                                    to={`/post/create`}>

                                    Create Post
                                </Link>
                                <Link
                                    className="btn btn-raised btn-success mr-5"
                                    to={`/user/edit/${user._id}`}>

                                    Edit Profile
                                </Link>
                                <DeleteUser userId={user._id}></DeleteUser>
                            </div>

                        ) : (
                            <FollowProfileButton
                                following={this.state.following}
                                onButtonClick={this.clickFollowButton}
                            />
                        )}
                    </div>
                </div>
                <div className="row">
                    <div className="col md-12 mt-5 mb-5">
                        <hr />
                        <p className="lead">{user.about}</p>
                        <hr />
                        <ProfileTabs
                            followers={user.followers}
                            following={user.following}
                            posts={posts} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;