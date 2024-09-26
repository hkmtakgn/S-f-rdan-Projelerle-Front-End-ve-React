import { createContext, useState } from "react"

export const MyContext = createContext()

export default function Counter ({children}) {
const [count,setCount] = useState(0)

function handleCounter () {
    setCount(prev => prev + 1)
}


    return (<>
    <MyContext.Provider value={{count,setCount}} >
        {children}
    </MyContext.Provider>
    </>)
};
