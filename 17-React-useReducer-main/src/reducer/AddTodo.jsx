import { useReducer, useState } from "react";
import { ADD, CLEAR, REMOVE, initialTodo, todoReducer } from "./addTodoReducer";
import { v4 as uuidV4 } from "uuid";

export default function AddTodo () {
    const [inputValue,setInputValue] = useState ("")
const [state,dispatch] = useReducer(todoReducer,initialTodo)
    function handleAdd () {
        if(inputValue != ""){
            dispatch({type:ADD,payload:{id:uuidV4(),title:inputValue}})
        document.getElementById("textID").value = ""
        setInputValue("")
        }
    }
    
    function handleRemove (id) {
        dispatch({type:REMOVE,payload:id})
    }

    function handleReset () {
        dispatch({type:CLEAR})
    }

    return (<>
    <input type="text" id="textID" onChange={(e) => setInputValue(e.target.value)}/>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleReset}>Clear</button>
    <br />
    <div style={{textAlign:"center"}}>
    <h3>↓↓↓ Tasks ↓↓↓</h3>
    <ul>
        {state.todos?.map(item => <li key={item.id}><span>{item.title}</span><span><button onClick={() => handleRemove(item.id)}>Sil</button></span></li>)}
    </ul>
    </div>
    
    </>)
};
