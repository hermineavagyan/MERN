import React, {useState} from 'react';

const Form = (props) => {
const {todoList,setTodoList} = props;
const [todoText, setTodoText] = useState("")

const submitHandler = (e)=>{
    e.preventDefault();
    setTodoList([...todoList,{
        todoText: todoText,
        id: Math.floor(Math.random() *10000).toString(),
        markedDelete: false
    } 
        

    ]);
    setTodoText ("")
}

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input onChange={(e)=>setTodoText(e.target.value)} value = {todoText} type = "text"/>
                <button>Add</button>
            </form>
        </div>
    )
}
export default Form;
