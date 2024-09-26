import AddTodo from "./AddTodo"
import TodoApp2 from "./TodoListPage2"
import Counter from "./customHook/Counter"


function App() {

  const [count,setCount,increment,decrement] = Counter ()

  return (
    <>
      <h1>App</h1>
      <hr />
      <h2>Counter : {count} </h2>
      <button onClick={increment} >increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
      <hr />
      <AddTodo />
      <TodoApp2 />
    </>
  )
}

export default App
