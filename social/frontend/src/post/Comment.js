import React, { Component } from 'react';
import { comment, uncomment } from './apiPost';
import { isAuthenticated } from '../authentication';
import { Link, Redirect } from 'react-router-dom';

class Comment extends Component {
    state = {
        text: ""
    }

    handleChange = event => {
        this.setState({ text: event.target.value })
    };
    addComment = e => {
        e.prevetDefault();
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
    render() {
        return (
            <div>
                <h2 className='mt-5 mb-5'>Leave a comment</h2>

                <form onSubmit={this.addComment}>
                    <div className='form-group'>
                        <input
                            className='form-control'
                            type="text"
                            onChange={this.handleChange} />

                    </div>
                </form>


            </div>
        )
    }
}
export default Comment
