import React, {useState} from 'react';
import './App.css';
import Form from './components/Form';
import Display from './components/Display';
function App() {
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  return (
    <div className="App">
      <Form 
        firstName = {firstName}
        setFirstName = {setFirstName}
        lastName = {lastName}
        setLastName = {setLastName}
        email = {email}
        setEmail = {setEmail}
        password= {password}
        setPassword= {setPassword}
        confirmPassword = {confirmPassword}
        setConfirmPassword = {setConfirmPassword}

      />
      <Display 
        firstName = {firstName}
        lastName = {lastName}
        email = {email}
        password= {password}
        confirmPassword = {confirmPassword}
      />
    </div>
  );
}

export default App;
