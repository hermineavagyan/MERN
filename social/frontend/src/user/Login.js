import React, {Component} from 'react';

class Login extends Component {
    constructor(){
        super()
        this.state = {
            email: "",
            password: "",
            error: "",
            redirectToReferer: false
        }
    }
    onChangeHandler = (name) => (e)=>{
        this.setState({error: ""})
        this.setState({[name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();
        const {email, password} = this.state;
        const user = {
            email,
            password
        };
        this.login(user)
        .then(data => {
            if(data.error){
                this.setState({error: data.error})
            }
            else {
                //authenticate the user
                //redirect
            }
        })
    }; 
    
    login = (user) =>(
        fetch('http://localhost:8080/signin', {
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
    );

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

        const {email, password, error} = this.state;

        return (
            <div className='container'>
                <h2 className='mt-5 mb-5'>Login</h2>

                <div 
                    className='alert alert-danger' 
                    style = {{display: error? "" : "none"}}>
                    {error}
                </div>

                {this.loginFormHandler(email, password)}
                
            </div>
        )
    }
}
export default Login;