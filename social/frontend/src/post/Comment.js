import React, { Component } from 'react';
import { comment, uncomment } from './apiPost';
import { isAuthenticated } from '../authentication';
import { Link, Redirect } from 'react-router-dom';
import DefaultProfile from "../images/avatar.jpg";

class Comment extends Component {
    state = {
        text: "",
        error: ""
    }

    handleChange = event => {
        this.setState({ error: "" })
        this.setState({ text: event.target.value })
    };

    isValid = () => {
        const { text } = this.state
        if (!text.length > 0 || text.length > 150) {
            this.setState({
                error: "Comment should not be empty or more than 150 charactrs long"
            });
            return false;

        }
        return true;
    }
    addComment = e => {
        e.preventDefault();
        if (!isAuthenticated()) {
            this.setState({ error: "Please login to leave a comment" })
            return false;
        }
        if (this.isValid()) {
            const userId = isAuthenticated().user._id;
            const token = isAuthenticated().token;
            const postId = this.props.postId;


            comment(userId, token, postId, { text: this.state.text })
                .then(data => {
                    if (data.error) {
                        console.log(data.error)
                    } else {
                        this.setState({ text: "" })
                        //dispatch fresh list of comments to parent component(SinglePost)
                        this.props.updateComments(data.comments);
                    }
                })
        }
    }

    deleteComment = (comment) => {
        // const postId = this.props.match.params.postId;
        // const token = isAuthenticated().token;
        // removePost(postId, token).then(data => {
        //     if (data.error) {
        //         console.log(data.error)
        //     } else {
        //         this.setState({ redirectToHome: true })
        //     }
        // })
        const userId = isAuthenticated().user._id;
        const token = isAuthenticated().token;
        const postId = this.props.postId;


        uncomment(userId, token, postId, comment)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                } else {
                    //dispatch fresh list of comments to parent component(SinglePost)
                    this.props.updateComments(data.comments);
                }
            })
    };
    deleteConfirmed = (comment) => {
        let answer = window.confirm("Are you sure you want to delete your comment?")
        if (answer) {
            this.deleteComment(comment);
        }
    }
    render() {
        const { comments } = this.props;
        const { error } = this.state;
        return (
            <div>
                <h2 className='mt-5 mb-5'>Leave a comment</h2>

                <form onSubmit={this.addComment}>
                    <div className='form-group'>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.text}
                            className='form-control'
                            placeholder="Leave a comment" />

                        <button className="btn btn-raised btn-success mt-2">
                            Post
                        </button>

                    </div>
                </form>
                {/* {JSON.stringify(comments)} */}
                <div
                    className='alert alert-danger'
                    style={{ display: error ? "" : "none" }}>
                    {error}
                </div>
                <div className="col-md-12">
                    <h3 className="text-primary">{comments.length} Comments</h3>
                    <hr />
                    {comments.map((comment, i) => (
                        <div key={i}>
                            <div>
                                <Link to={`/user/${comment.postedBy._id}`}>
                                    <img
                                        style={{
                                            borderRadius: "50%",
                                            border: "1px solid black"
                                        }}
                                        className="float-left mr-2"
                                        height="30px"
                                        width="30px"
                                        onError={i =>
                                            (i.target.src = `${DefaultProfile}`)
                                        }
                                        src={`http://localhost:8080/user/photo/${comment.postedBy._id}`}
                                        alt={comment.postedBy.name}
                                    />
                                </Link>
                                <div>
                                    <p className="lead">{comment.text}</p>
                                    <p className="font-italic mark">
                                        Posted by{" "}
                                        <Link
                                            to={`/user/${comment.postedBy._id}`}
                                        >
                                            {comment.postedBy.name}{" "}
                                        </Link>
                                        on{" "}
                                        {new Date(
                                            comment.created
                                        ).toDateString()}
                                        {isAuthenticated().user &&
                                            isAuthenticated().user._id === comment.postedBy._id &&
                                            <>

                                                <span
                                                    onClick={() => this.deleteConfirmed(comment)}
                                                    className="text-danger float-right mr-1">
                                                    Remove
                                                </span>
                                            </>}
                                    </p>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        );
    }
}
export default Comment
