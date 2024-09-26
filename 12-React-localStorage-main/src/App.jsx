import { useEffect } from "react";
import { useState } from "react"


function App() {

  const [user,setUser] = useState(null)
  const [state,setState] = useState("")
  const [trigger,setTrigger] = useState(false)

useEffect(() => {

    const userData = JSON.parse(localStorage.getItem("user"));
    setUser(userData)
    
    
} , [trigger])

function handleSetLocalStorage () {
  localStorage.setItem("user",JSON.stringify({id:1,name:"Hikmet",contact:"hikmetakgun@outlook.com"}));
  setState("User info has been set in localStorage")
  setTrigger(prev => !prev)

}

function handleDeleteUserInfo () {
  localStorage.removeItem("user")
  setTrigger(prev => !prev)
  setTimeout(() => {
    setUser({})
    setState("User info deleted")
  },100)
};

  return (
    <>
      <h1>App</h1>
      <button onClick={handleSetLocalStorage}>Send user info to localStorage</button>
      <br />
      <button onClick={handleDeleteUserInfo} style={{marginTop:"3px"}}>Delete User Info</button>
      <br />
      <div style={{textAlign:"center"}}><h3>{user && state}</h3></div>
    </>
  )
}

export default App
