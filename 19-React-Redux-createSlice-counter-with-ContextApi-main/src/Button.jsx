import { useDispatch } from "react-redux"
import { increment } from "./slice/counterSlice"

export default function CounterButtons () {

const dispatch = useDispatch()

    return (<>
    <button onClick={() => dispatch(increment())}>increment</button>
    </>)
};
