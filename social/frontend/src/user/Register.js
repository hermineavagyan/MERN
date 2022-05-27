import React, {Component} from 'react';
import {register} from '../authentication';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: "",
            open: false
        }
    }
    onChangeHandler = (name) => (e)=>{
        this.setState({error: ""})
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
        register(user)
        .then(data => {
            if(data.error){
                this.setState({error: data.error})
            }
            else {
                this.setState({
                    error: "",
                    name: "",
                    email: "",
                    password: "",
                    open: true
                })
            }
        })
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
                    <button onClick = {this.submitHandler} className='btn btn-raised btn-primary'>Submit</button>
                </form>
    )
    
    render(){

        const {name, email, password, error, open} = this.state;

        return (
            <div className='container'>
                <h2 className='mt-5 mb-5'>Register</h2>

                <div 
                    className='alert alert-danger' 
                    style = {{display: error? "" : "none"}}>{error}
                </div>

                <div 
                    className='alert alert-info' 
                    style = {{display: open? "" : "none"}}>
                    Account is successfully created. Please login.
                </div>
                {this.registerFormHandler(name, email, password)}
                
            </div>
        )
    }
}
export default Register;