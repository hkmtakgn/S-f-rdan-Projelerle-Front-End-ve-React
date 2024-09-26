

export default function CounterBtn ({counter,...otherProps}) {



    return (<>
    <button className={otherProps.className} type="button" onClick={counter} id={otherProps.id} >Increment</button>
    </>)
}
