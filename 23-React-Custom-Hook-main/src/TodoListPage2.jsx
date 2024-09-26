import { useState } from "react"
import Todo from "./customHook/Todo"



export default function TodoApp2 () {
const [taskList,setTaskList] = Todo ()
   const [taskData,setTaskData] = useState ("")
    return (<>
    <div>
        <h1>
            Todo Page 2
        </h1>
        <input type="text" onChange={(e) => setTaskData(e.target.value)} />
        <ul>
            {taskList.map((item,index) => <li key={index}>{item}</li>)}
        </ul>
        <button onClick={() => setTaskList(prev => [...prev,taskData])}>Add</button>
    </div>
    </>)
}
