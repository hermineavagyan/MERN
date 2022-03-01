
import React, {useState, useEffect} from 'react';


const Display = (props) => {
    const {todoList,setTodoList} = props;
    const [todoText, setTodoText] = useState("")

    const deleteButton = (idFromBelow) =>{
        setTodoList(todoList.filter((todo, index) => todo.id !==idFromBelow))
    }

    const handleCompleted = (todoFromBelow)=>{
        
        let updateTodos = todoList.map((todo)=>{
            if(todo === todoFromBelow){
                let newTodo = {...todo}
                newTodo.markedDelete = !todo.markedDelete;
                return newTodo;
            }
            else{
                return todo;
            }
            

        })
        setTodoList(updateTodos);
        
    }
    useEffect(()=>{
        const data = localStorage.getItem("my-todo-list");
        if (data){
            setTodoList(JSON.parse(data));
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("my-todo-list", JSON.stringify(todoList));
});
    const styled = (markedDelete)=>{
        if (markedDelete){
            return "completed"
        }
        else{
            return "notCompleted"
        }
    }

    return (
        <div>
        {
            todoList.map((todo, index) =>(
                <div key = {index}>
                    
                    <div>
                    <p className={styled(todo.markedDelete)}>{todo.todoText}
                    <input onClick={()=>handleCompleted(todo)} type = "checkbox"/>
                    </p>
                    </div>
                    <p> <button onClick={()=> deleteButton(todo.id)}>Delete</button></p>
                </div>
            ))
        }
        </div>
    )
}
export default Display;