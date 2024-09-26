import Container from "./container/Container"
import Counter from "./counter/Counter"
import {useState} from "react"
import CounterBtn from "./counter/CounterBtn"

function App() {

const [count,setCount] = useState(0)
  

  function counter () {

setCount(prev => prev + 1)    
    
  }

  return (
    <>
<Container>
      <Counter count={count} />
      <CounterBtn counter={counter} className="btn btn-primary" id="counterBtnID" />
      <h1 className="d-flex justify-content-between m-0 p-0 bg-warning"><span>{`<`}</span>container-width<span>{`>`}</span></h1>
</Container>
    </>
  )
}

export default App
