import { useState } from "react"


function App() {
const [count,setCount] = useState(0)
//count → Değişken ve setCount ise değişkeni değiştiren fonksiyon
function CounterApp () {
  setCount(prev => prev + 1)
};

function handleResetCounter () {
  setCount(0)
}

  return (
    <>
      <h1>useState ile counter app</h1>

      <div className="container bg-info text-center">
        <h1 className="fs-1"> Count : {count}</h1>
        <button onClick={CounterApp} className="btn btn-danger rounded-pill">Increment</button>
        <button onClick={handleResetCounter} className="btn btn-dark rounded-pill">Reset</button>
      </div>

    </>
  )
}

export default App
