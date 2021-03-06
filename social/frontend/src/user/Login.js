import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {login, authenticate} from '../authentication';
//import { getNavigate } from "./getNavigate.js";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectToReferer: false,
            loading: false
        }

    };
    
    onChangeHandler = (name) => (e)=>{
        this.setState({error: ""})
        this.setState({[name]: e.target.value})
    }

    submitHandler = e =>{
        e.preventDefault();
        this.setState({loading: true})
        const {email, password} = this.state;
        const user = {
            email,
            password
        };
        console.log(user)
        login(user)
        .then(data => {
            if(data.error){
                this.setState({error: data.error, loading: false})
            }
            else {
                //authenticate the user
                authenticate(data, ()=>{
                    this.setState({redirectToReferer: true})
                })
            }
        })
    }; 

    loginFormHandler = (email, password)=>(
        <form>
                    
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
                    <button onClick = {this.submitHandler} className='btn btn-raised btn-primary'>Submit</button>
                </form>
    )
    
    render(){

        const {email, password, error, redirectToReferer, loading} = this.state;

        if(redirectToReferer){
            return <Redirect to = "/" />
        }

        return (
            <div className='container'>
                <h2 className='mt-5 mb-5'>Login</h2>

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

                {this.loginFormHandler(email, password)}
                
            </div>
        )
    }
    
}
export default Login;



