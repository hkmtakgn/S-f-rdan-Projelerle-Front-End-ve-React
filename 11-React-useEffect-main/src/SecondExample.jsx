import { useEffect, useState } from "react"


export default function SecondExample () {
const [tasks,setTasks] = useState ([])
const [taskText,setTaskText] = useState("")


    function handleChange (event) {
        setTaskText(event.target.value)
        
    }

function handleAdd () {
    setTasks([...tasks,taskText])
    
}

useEffect(() => {
    console.log(taskText)
},[taskText])


    return (<>
    <input onChange={handleChange} type="text" name="taskText" id="taskID" placeholder="taskText" />
    <input onClick={handleAdd} type="button" value="Add" />
    <ul>
        {tasks?.map((item,index) => <li key={index}>{item}</li>)}
    </ul>
    <p>useEffect sayesinde taskText her değiştiğinde konsolda anlık yazabiliyoruz.
        Eğer useEffect kullanmasaydık o zaman text input içine 1 yazdığımızda consolda boş iken 2 yazdığımızda 1 yazacaktı ve 3 yazınca da 2 yazacaktı.Yani her yazılanı bir geriden gelerek konsolda yazacaktı.
    </p>
    </>)
};
