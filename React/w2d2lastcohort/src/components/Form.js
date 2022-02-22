import React, {useState} from "react";

const Form = (props)=>{

    

    //Our pices of state. They are being altered below with our synthetic events
    const {studentList,setStudentList} = props;

    const[name, setName] = useState("");
    const[favStack, setFavStack] = useState("");
    const[tallClub, setTallClub] = useState(false);
    const [errorMsg, setErrorMsg] = useState("")

    const submitHandler = (e)=>{
        e.preventDefault(e);
        if(name.length < 3 || favStack ===""){
            setErrorMsg("Your form has unresolved propblems!");
        }
        else{
            setStudentList([...studentList, 
                {
                    name: name,
                    favStack:favStack,
                    tallClub: tallClub
                }
            ])
            setName("");
            setTallClub(false);
            setFavStack("");
            setErrorMsg("");
        }
    }

    return(
        <div>
            <h1>Add a student</h1>
            {
                errorMsg?
                <p>{errorMsg}</p>
                :null
            }
            <form onSubmit={submitHandler} style ={{width:"25%", textAlign:"left", margin: "auto"}}>
                {
                    name.length > 0 && name.length < 3?
                    <span>Name must be at least 3 char long</span>
                    :null
                }
                
                <p>
                {/* Difference here htmlFor(jsx) vs for(html) */}
                    <label htmlFor="name">Name: </label>
                    <input name = "name" type="text" value={name} onChange = {(e)=>setName(e.target.value)}/>
                </p>

                <p>
                    <label htmlFor="tallClub">Tall? (6 feet +): </label>
                    <input name = "tallClub" type="checkbox" checked={tallClub} onChange = {(e) => setTallClub(!tallClub)}/>
                </p>

                <p>
                    <label htmlFor="favStack">Favorite Mern ... I mean stack: </label>
                    <select name = "favStack" value={favStack} onChange = {(e) => setFavStack(e.target.value)}>
                        <option defualt>Select</option>
                        <option value="mern">mern</option>
                        <option value="python">python</option>
                        <option value="java">java</option>
                    </select>
                </p>
                <input type = "submit" value = "Add Student" style = {{margin:"auto"}}/>
            </form>
        </div>
    )
}
export default Form;