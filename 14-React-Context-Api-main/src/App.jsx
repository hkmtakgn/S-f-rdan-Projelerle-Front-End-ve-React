
import { useContext } from "react"
import Counter, { MyContext } from "./context/Counter"


function App() {
const {count,setCount} = useContext(MyContext,Counter)

  return (
    <>
      <h1>App</h1>
      <h2>{count}</h2>
      <h3><button onClick={() => setCount(prev => prev + 1)}>Increment</button></h3>
    </>
  )
}

export default App
