import React, {Component} from "react";
import {isAuthenticated} from '../authentication';
import {read,update} from './getUser';
import {Redirect} from 'react-router-dom';

class EditProfile extends Component{

    constructor(){
        super()
        this.state = {
            id: "",
            name: "",
            email: "",
            password: "",
            redirectToProfile: false,
            error: ""
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

        const {name, email, password} = this.state

        if(name.length == 0){
            this.setState({error: "Name is required"})
            return false;
        }
        
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.setState({error: "A valid email is required"})
            return false;
        }
        
        if(password.length >= 1 && password.length <=7){
            this.setState({error: "Password must be at least 8 characters long"})
            return false;
        }
        return true;
        
    }
    onChangeHandler = name => event => {
        let value = name === "photo" ? event.target.files[0] : event.target.value;
        this.userData.set(name, value)
        this.setState({[name]: value})
    };
    submitHandler = e =>{
        e.preventDefault();

        if(this.isValid()){
            const {name, email, password} = this.state;
            const user = {
                name,
                email,
                password: password || undefined
            };
            console.log(user);
    
            const userId = this.props.match.params.userId;
            const token = isAuthenticated().token;

            update(userId, token, this.userData)
            .then(data => {
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
        const {id, name, email, password, redirectToProfile, error } = this.state;
            if(redirectToProfile){
                return <Redirect to = {`/user/${id}`}/>
            }
        
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Edit Profile</h2>
                <div 
                    className='alert alert-danger' 
                    style = {{display: error? "" : "none"}}>
                    {error}
                </div>
                {this.registerFormHandler(name, email, password)}
            </div>
    )}
}
export default EditProfile;