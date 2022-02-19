import React, {useState} from "react";

const Form = (props)=>{

    const {firstName,setFirstName,lastName, setLastName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword } = props;

    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e)=>{
        e.preventDefault();
        setFirstName(e.target.value);

        if (e.target.value.length < 1){
            setFirstNameError("First name is required")
        }
        else if (e.target.value.length < 3){
            setFirstNameError("First name should be at least 3 char")
        }
        else {
            setFirstNameError("")
        }
    }
    const handleLastName = (e)=>{
        setLastName(e.target.value);

        if(e.target.value.length < 1){
            setLastNameError("Last Name is required");
        }
        else  if(e.target.value.length < 3){
            setLastNameError("Last Name should be at least 3 characters");
        }
        else{
            setLastNameError("")
        }
    }
    const handleEmail = (e)=>{
        setEmail(e.target.value);

        if(e.target.value.length < 1){
            setEmailError("Email is required");
        }
        else  if(e.target.value.length < 3){
            setEmailError("Email should be at least 3 characters");
        }
        else{
            setEmailError("")
        }
    }
    const handlePassword = (e)=>{
        setPassword(e.target.value);

        if(e.target.value.length < 1){
            setPasswordError("Password is required");
        }
        else  if(e.target.value.length < 8){
            setPasswordError("Password should be at least 8 characters");
        }
        else{
            setPasswordError("")
        }
    }
    const handleConfirmPassword = (e)=>{
        setConfirmPassword(e.target.value);

        if(e.target.value !== password){
            setConfirmPasswordError(" Confirm Password must match password");
        }
        else{
            setConfirmPasswordError("")
        }
    }
    return (

        <div>
            <form onSubmit={()=>{}}>
            <p className="inputDataDivStyle">
                <label>First Name </label>
                <input className="inputBox" onChange ={(e)=> handleFirstName(e)
                } type = "text"/>
                {
                    firstNameError?
                    <p>{firstNameError}</p>
                    :null
                }
                {/* {
                    firstName.length > 0 && firstName.length < 2?
                    <p> First name should be at least 2 characters</p>
                    :null
                } */}
            </p>
            <p className="inputDataDivStyle">
                <label>Last Name </label>
                <input onChange={(e) =>handleLastName(e)} type = "text"/>
                {
                    lastNameError?
                    <p>{lastNameError}</p>
                    :null
                }
            </p>
            <p className="inputDataDivStyle">
                <label>Email </label>
                <input  onChange = {(e) => handleEmail(e)} type = "email"/>
                {
                    emailError?
                    <p>{emailError}</p>
                    :null
                }
            </p>
            <p className="inputDataDivStyle">
                <label>Password </label>
                <input onChange = {(e) => handlePassword(e)} type = "password"/>
                {
                    passwordError?
                    <p>{passwordError}</p>
                    :null
                }
            </p>
            <p className="inputDataDivStyle">
                <label>Confirm Password </label>
                <input onChange = {(e) => handleConfirmPassword(e)} type = "password"/>
                {
                    confirmPasswordError?
                    <p>{confirmPasswordError}</p>
                    :null
                }
            </p>
            </form>
        </div>
    )
}
export default Form;