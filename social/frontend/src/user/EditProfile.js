import React, {Component} from "react";
import {isAuthenticated} from '../authentication';
import {read,update} from './getUser';
import {Redirect} from 'react-router-dom';
import DefaultProfileImage from '../images/avatar.jpg'

class EditProfile extends Component{

    constructor(){
        super()
        this.state = {
            id: "",
            name: "",
            email: "",
            password: "",
            redirectToProfile: false,
            error: "",
            fileSize: 0,
            loading: false
        }
    }

    init = (userId) => {
        const token = isAuthenticated().token;
        read(userId, token)
        .then(data =>{
            if (data.error) {
                this.setState({redirectToProfile: true})
                console.log("Error")
            }
            else {
                this.setState(
                    {
                        id: data._id, 
                        name: data.name, 
                        email: data.email,
                        error: ""
                    })
            }
        })

    }
    componentDidMount(){
        this.userData = new FormData()
        const userId = this.props.match.params.userId;
        this.init(userId)
        
    }

    isValid = ()=>{

        const {name, email, password, fileSize} = this.state

        if (fileSize > 1000000) {
            this.setState({
                error: "File size should be less than 100kb",
                loading: false
            });
            return false;
        }

        if(name.length === 0){
            this.setState({error: "Name is required"})
            return false;
        }
        
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.setState({error: "A valid email is required"})
            return false;
        }
        
        if(password.length >= 1 && password.length <=5){
            this.setState({error: "Password must be at least 6 characters long"})
            return false;
        }
        return true;
        
    }
    // onChangeHandler = name => event => {
    //     const value = name === "photo" ? event.target.files[0] : event.target.value;
    //     this.userData.set(name, value)
    //     this.setState({[name]: value})
    // };
    onChangeHandler = name => event => {
        this.setState({ error: "" });
        const value = name === "photo" ? event.target.files[0] : event.target.value;
        const fileSize = name === "photo" ? event.target.files[0].size : 0;
        this.userData.set(name, value);
        this.setState({ [name]: value, fileSize });    
    };

    submitHandler = e =>{
        e.preventDefault();
        this.setState({loading: true})

        if(this.isValid()){

            const userId = this.props.match.params.userId;
            const token = isAuthenticated().token;

            update(userId, token, this.userData).then(data => {
                if(data.error){
                    this.setState({error: data.error})
                }
                

                else {
                    this.setState({
                        redirectToProfile: true
                    })
                }
            })
        }
    }; 
    registerFormHandler = (name, email, password)=>(
        <form>
                    <div className='form-group'>
                        <label className='text-muted'>Profile Photo</label>
                        <input 
                            onChange={this.onChangeHandler("photo")} 
                            type = "file" 
                            accept = "image/*"
                            className='form-control'
                            
                        />
                    </div>
                    <div className='form-group'>
                        <label className='text-muted'>Name</label>
                        <input 
                            onChange={this.onChangeHandler("name")} 
                            type = "text" 
                            className='form-control'
                            value = {name}
                        />
                    </div>
                    <div className='form-group'>
                        <label className='text-muted'>Email</label>
                        <input 
                            onChange={this.onChangeHandler("email")} 
                            type = "email" 
                            className='form-control'
                            value = {email}
                        />
                        
                    </div>
                    <div className='form-group'>
                        <label className='text-muted'>password</label>
                        <input 
                            onChange={this.onChangeHandler("password")} 
                            type = "password" 
                            className='form-control'
                            value = {password}
                        />
                    </div>
                    <button onClick = {this.submitHandler} className='btn btn-raised btn-primary'>Update</button>
                </form>
    )
    render() {
        const {id, name, email, password, redirectToProfile, error, loading } = this.state;
            if(redirectToProfile){
                return <Redirect to = {`/user/${id}`}/>
            }
            const photoUrl = id ? 
            `http://localhost:8080/user/photo/${id}?${new Date().getTime()}` 
            : DefaultProfileImage
            
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Edit Profile</h2>
                <div 
                    className='alert alert-danger' 
                    style = {{display: error? "" : "none"}}>
                    {error}
                </div>
                {
                    loading ? 
                    (<div className="jumbotron text center">
                        <h2>Loading...</h2>
                    </div>)
                    :("")
                }
                <img 
                    style={{ height: "200px", width: "auto" }}
                    className="img-thumbnail"
                    src = {photoUrl} 
                    alt = {name}
                />
                {this.registerFormHandler(name, email, password)}
            </div>
    )}
}
export default EditProfile;