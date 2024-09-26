import { useReducer } from "react"
import { counterReducer, decrement, initialState, reset } from "./counterReducer"


export default function Counter () {
const [state,dispatch] = useReducer(counterReducer,initialState)


    return (<>
    <h1>Counter : {state} </h1>
    <button onClick={() => dispatch("increment")}>increment</button>
    <button onClick={() => dispatch(decrement)}>decrement</button>
    <button onClick={() => dispatch(reset)}>reset</button>
    </>)
}
