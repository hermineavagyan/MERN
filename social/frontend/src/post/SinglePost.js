
import React, { Component } from 'react'
// import post from '../../../nodeapi/models/post';
import { singlePost } from './apiPost';
import { Link } from 'react-router-dom';
import DefaultPostImage from '../images/cherry_blossom.jpg'

class SinglePost extends Component {

    state = {
        post: ''
    }
    componentDidMount = () => {
        const postId = this.props.match.params.postId;
        singlePost(postId)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                this.setState({ post: data })
            })
    }

    renderPost = (post) => {
        const posterId = post.postedBy
            ? `/user/${post.postedBy._id}`
            : ""
        const posterName = post.postedBy
            ? post.postedBy.name
            : "Unknown"
        return (
            <div className="card-body">
                <img
                    src={`http://localhost:8080/post/photo/${post._id}`}
                    onError={i => (i.target.src = `${DefaultPostImage}`)}
                    alt={post.title}
                    className="img-thumbnail mb-3"
                    style={{ height: '300px', width: "100%", objectFit: "cover" }} />

                <p className="card-text">{post.body}</p>
                <br />
                <p className='font-italic mark'>
                    Posted By {" "}
                    <Link to={`${posterId}`}>
                        {posterName} {" "}
                    </Link>
                    on {new Date(post.created).toDateString()}
                </p>
                <Link
                    to={`/`}
                    className="btn btn-raised btn-primary btn-sm">
                    Back to posts
                </Link>
            </div>
        )
    }


    render() {
        const { post } = this.state
        return (
            <div className='container'>
                <h2 className='display-2 mt-5 mb-5'>{post.title}</h2>
                {
                    !post ?
                        (<div className="jumbotron text center">
                            <h2>Loading...</h2>
                        </div>)
                        : this.renderPost(post)
                }



            </div>


        )
    }
}
export default SinglePost;
