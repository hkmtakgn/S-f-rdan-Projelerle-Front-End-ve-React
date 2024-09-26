import { useState } from "react";


export default function Todo () {

    const [taskList,setTaskList] = useState ([])

    return [taskList,setTaskList]

};
