import { useContext } from "react"
import { MyContext } from "./Context"
import { decrement, increment, reset } from "./slice/counterSlice"


export default function ForContext () {

    const {dispatch,value} = useContext(MyContext)


    return (<>
    <h2>Context-Api ile</h2>
        <h1>Counter : {value} </h1>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(reset())}>reset</button>
    </>)
};
