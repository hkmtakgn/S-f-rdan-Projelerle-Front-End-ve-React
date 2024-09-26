import { useDispatch, useSelector } from "react-redux";
import CounterButtons from "./Button";


export default function Counter() {
    const value = useSelector(store => store.counter.value);
    

    return (<>
        <h1>Counter : {value} </h1>
        <CounterButtons />
    </>)
};
