
import React, { Component } from 'react'
import { singlePost, update } from './apiPost'
import { isAuthenticated } from '../authentication';
import { Redirect } from 'react-router-dom';

class EditPost extends Component {
    constructor() {
        super()
        this.state = {
            id: '',
            title: '',
            body: '',
            redirectToProfile: false,
            error: "",
            fileSize: 0,
            loading: false
        }
    }
    //read from the backend
    init = (postId) => {

        singlePost(postId)
            .then(data => {
                if (data.error) {
                    this.setState({ redirectToProfile: true })
                    console.log("Error")
                }
                else {
                    this.setState(
                        {
                            id: data._id,
                            title: data.title,
                            body: data.body,
                            error: ""

                        })
                }
            })

    }
    componentDidMount() {
        this.postData = new FormData()
        const postId = this.props.match.params.postId;
        this.init(postId)

    };
    isValid = () => {

        const { title, body, fileSize } = this.state

        if (fileSize > 1000000) {
            this.setState({
                error: "File size should be less than 100kb",
                loading: false
            });
            return false;
        }

        if (title.length === 0 || body.length === 0) {
            this.setState({ error: "All fields are required", loading: false })
            return false;
        }
        return true;
    }
    onChangeHandler = name => event => {
        this.setState({ error: "" });
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        const fileSize = name === "photo" ? event.target.files[0].size : 0;
        this.postData.set(name, value);
        this.setState({ [name]: value, fileSize });
    };

    submitHandler = e => {
        e.preventDefault();
        this.setState({ loading: true })

        if (this.isValid()) {

            const postId = this.state.id
            const token = isAuthenticated().token;

            update(postId, token, this.postData).then(data => {
                if (data.error)
                    this.setState({ error: data.error })
                else {
                    this.setState({
                        loading: false,
                        title: "",
                        body: "",
                        photo: "",
                        redirectToProfile: true
                    })
                }

            })
        }
    };
    editPostForm = (title, body) => (
        <form>
            <div className="form-group">
                <label className="text-muted">Post Photo</label>
                <input
                    onChange={this.onChangeHandler("photo")}
                    type="file"
                    accept="image/*"
                    className="form-control"
                />
            </div>
            <div className="form-group">
                <label className="text-muted">Title</label>
                <input
                    onChange={this.onChangeHandler("title")}
                    type="text"
                    className="form-control"
                    value={title}
                />
            </div>

            <div className="form-group">
                <label className="text-muted">Body</label>
                <textarea
                    onChange={this.onChangeHandler("body")}
                    type="text"
                    className="form-control"
                    value={body}
                />
            </div>

            <button
                onClick={this.submitHandler}
                className="btn btn-raised btn-primary"
            >
                Update Post
            </button>
        </form>
    );
    render() {
        const { title, body, redirectToProfile } = this.state;

        if (redirectToProfile) {
            return <Redirect to={`/user/${isAuthenticated().user._id}`} />
        }
        return (
            <div className='container'>
                <h2 className='mt-5 mb-5'>{title}</h2>

                {this.editPostForm(title, body)}
            </div>
        )
    }
}
export default EditPost
