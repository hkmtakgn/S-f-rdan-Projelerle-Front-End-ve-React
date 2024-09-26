import { useState } from "react"
import Todo from "./customHook/Todo"


export default function AddTodo () {
    const [formData,setFormData] = useState("")
const [taskList,setTaskList] = Todo ()

function handleChange (event) {
const inputValue = event.target.value
setFormData(inputValue)
}

function handleSubmit (event) {
event.preventDefault()
setTaskList(prev => [...prev,formData])
event.target.reset()
}

    return (<>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Add"/>
    </form>
    <ul>
        {taskList?.map((item,index) => <li key={index}>{item}</li>)}
    </ul>
    </>)
};