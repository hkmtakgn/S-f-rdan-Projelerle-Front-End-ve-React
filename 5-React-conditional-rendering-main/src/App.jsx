

function App() {

  const user = 10;

  function ConditionalRendering (user) {
    if(!user) {
      return <h2>false</h2>
    }

    if(user === 10) {
      return <h2>user : number</h2>
    }
    
    return "user : true"
    
  }
  

  return (
    <>
      <h1>React-conditional-rendering</h1>
      <h2>{
        user ? "user : true" : "user : false"
        }</h2>
        {ConditionalRendering(user)}
    </>
  )
}

export default App
