
import './App.css';
import React, {useState} from "react";
import Form from './components/Form';
import Display from './components/Display';
import Header from './components/Header';

function App() {
  const [studentList, setStudentList] = useState([]);
  const [themeMode, setThemeMode] = useState({
    style: "day",
    text: "day mode"
  }
  )


  return (
    <div className={themeMode.style} style = {{height: "100vh"}}>
      <Header themeMode = {themeMode} setThemeMode = {setThemeMode}/>
      <Form studentList = {studentList} setStudentList = {setStudentList}/>
      <Display studentList = {studentList} setStudentList = {setStudentList}/>

      <p>{themeMode.text}</p>
    </div>
  );
}

export default App;
