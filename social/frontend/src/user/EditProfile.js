import React, {Component} from "react";
import {isAuthenticated} from '../authentication';
import {read} from './getUser';
import {Redirect} from 'react-router-dom';

class EditProfile extends Component{

    constructor(){
        super()
        this.state = {
            id: "",
            name: "",
            email: "",
            password: "",
            redirectToProfile: false
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
                        email: data.email
                    })
            }
        })

    }
    componentDidMount(){
        const userId = this.props.match.params.userId;
        this.init(userId)
        
    }
    onChangeHandler = (name) => (e)=>{
        this.setState({[name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();
        const {name, email, password} = this.state;
        const user = {
            name,
            email,
            password
        };
        console.log(user);
        // register(user)
        // .then(data => {
        //     if(data.error){
        //         this.setState({error: data.error})
        //     }
        //     else {
        //         this.setState({
        //             error: "",
        //             name: "",
        //             email: "",
        //             password: "",
        //             open: true
        //         })
        //     }
        // })
    }; 
    registerFormHandler = (name, email, password)=>(
        <form>
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
        const {name, email, password } = this.state;
        return (
            <div className="container">
                <h2 className="mt-5 mb-5">Edit Profile</h2>
                {this.registerFormHandler(name, email, password)}
            </div>
    )}
}
export default EditProfile;