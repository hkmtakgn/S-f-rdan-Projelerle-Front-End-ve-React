import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, reset } from "./counterSlice"


export default function Counter () {
    const value = useSelector(store => store.counter.value)
    const dispatch = useDispatch()

    return (<>
    <h1>Counter : {value} </h1>
    <button onClick={() => dispatch(increment())}>Arttır</button>
    <button onClick={() => dispatch(decrement())}>Azalt</button>
    <button onClick={() => dispatch(reset())}>Reset</button>
    </>)
};