import fakeApi from "./fetchData/fakeApiData"


function App() {
const [fetchData] = fakeApi()

  return (
    <>
      <h1>App</h1>
      <hr />
      <ul>
        {fetchData.map(item => <li key={item.id}><h1>{item.title}</h1><img style={{width:"300px",margin:"3px"}} src={item.image} alt={item.name} /></li>)}
      </ul>
    </>
  )
}

export default App
