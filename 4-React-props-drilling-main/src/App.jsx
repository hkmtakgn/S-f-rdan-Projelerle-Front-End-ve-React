import { useState } from "react"
import GrandParentContainer from "./propsDrilling/GrandParentContainer"


function App() {
  
  const [count,setCount] = useState (0)


  return (
    <>
      <h1>App</h1>
      <button onClick={() => setCount(prev => prev +1)} type="button" className="btn btn-danger">Increment</button>
      <GrandParentContainer count={count} />
    </>
  )
}

export default App
