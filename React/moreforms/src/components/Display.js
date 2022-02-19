import React, {userState} from "react";


const Display = (props)=>{
    const {firstName,lastName,  email, password, confirmPassword} = props;
    return (
        <div className="container">
        <h2>Your Form Data</h2>
         <p>
          <label>First Name: </label>{ firstName }
        </p>
            
            <p><label>Last Name: </label> {lastName}</p>
            <p><label>Email: </label> {email}</p>
            <p><label>Password: </label> {password.password}</p>
            <p><label>Confrim Password: </label> {confirmPassword.password}</p>
    
        </div>
    )
}
export default Display;

