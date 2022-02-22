import React,{useState} from "react";
import Form from "./Form";

const Display = (props)=>{
    const {studentList, setStudentList} = props;

    const deleteStudentByName = (studentNameToDelete) =>{
        console.log(studentNameToDelete);
        setStudentList(studentList.filter((student) => {
            return student.name !== studentNameToDelete;
        }))
    }

    return(
        <div style = {{width: "70%", margin: "auto"}}>
        <h2 style = {{display : "block"}} >Roster:</h2>
            
                
                <div style = {{display:"flex", color:"green"}}>
                {
                studentList.map((student, index)=>(
                    <div key={index} style = {{display: "flex", flexDirection:"column", padding: "10px", border :"3px solid black"}}>
                        <p> Name: {student.name}</p>
                        {
                            student.tallClub === true?
                            <p>You are in the tall Club! Yay</p>
                            : <p>Sorry shortie!</p>
                        }
                        <p>Favorite Stack: {student.favStack}</p>
                        <button onClick = {(e)=>deleteStudentByName(student.name)}>Delete</button>
                    </div>
                ))
            }
                </div>
           
        </div>
    )
}
export default Display;