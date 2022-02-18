import React, {userState} from "react";

const Display = (props)=>{
    const {firstName,lastName,  email, password, confirmPassword} = props;
    return (
        <div>
            <p><h2>First Name:</h2> {firstName}</p>
            <p><h2>Last Name:</h2> {lastName}</p>
            <p><h2>Email:</h2> {email}</p>
            <p><h2>Password:</h2> {password.password}</p>
            <p><h2>Confirm Password:</h2> {confirmPassword.password}</p>
            <hr/>
        </div>
    )
}
export default Display;