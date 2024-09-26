import ContextCounter from "./Context"
import Counter from "./Counter"
import ForContext from "./ForContext"


function App() {


  return (
    <>
      <h1>App</h1>
      <hr />
      <Counter />
      <hr />
      <ContextCounter>
      <ForContext />
      </ContextCounter>
    </>
  )
}

export default App
