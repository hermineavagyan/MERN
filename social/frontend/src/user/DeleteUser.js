import React, {Component} from "react";
import {isAuthenticated} from '../authentication';
import {remove} from './getUser';
import {Redirect} from 'react-router-dom';
import {logout} from '../authentication'

class DeleteUser extends Component {

    state = {
        redirect: false
    }
    deleteAccount = () =>{
        const token = isAuthenticated().token;
        const userId = this.props.userId;
        remove(userId, token)
        .then(data =>{
            if(data.error) {
                console.log(data.error)
            }else {
                //signout user
                logout(()=>console.log("Account is deleted"))
                //redirect
                this.setState({redirect: true})
                
                
            }
        })
    };
    deleteConfirmed = () =>{
        let answer = window.confirm("Are you sure you want to delete your account?")
        if(answer){
            this.deleteAccount();
        }
    }
    render() {
        const {redirect} = this.state
        if(redirect){
            return <Redirect to = "/" />
        }
        return (
            <div>
                <button 
                    onClick={this.deleteConfirmed} 
                    className="btn btn-raised btn-danger">
                    Delete Profile
                </button>
            </div>
        )
    }
}
export default DeleteUser;