import React, {Component} from 'react';

class Register extends Component {
    constructor(){
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            error: "",
        }
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
        this.register(user)
    }; 
    
    register = (user) =>{
        fetch('http://localhost:8080/signup', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })
        .then (res =>{
            return res.json()
        })
        .catch(err => console.log(err))
    };
    
    render(){

        const {name, email, password} = this.state;

        return (
            <div className='container'>
                <h2 className='mt-5 mb-5'>Register</h2>
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
            </div>
        )
    }
}
export default Register;