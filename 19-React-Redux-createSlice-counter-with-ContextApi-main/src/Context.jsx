import { createContext } from "react"
import { useDispatch, useSelector } from "react-redux"

const MyContext = createContext()

export default function ContextCounter ({children}) {

const dispatch = useDispatch()
const value = useSelector(store => store.counter.value)

    return (<>
    <MyContext.Provider value={{dispatch,value}}>
        {children}
    </MyContext.Provider>
    </>)
}

export {MyContext}
