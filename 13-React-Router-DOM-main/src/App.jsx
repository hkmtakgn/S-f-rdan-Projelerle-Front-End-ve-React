import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./Navigation"
import Home from "./Home"
import Contact from "./Contact"
import Aboutus from "./Aboutus"
import { useState } from "react"
import Login from "./Login"
import Favories from "./Fav"
import PrivateRoute from "./PrivateRoute"



function App() {
const Navigate = useNavigate()
  const [user,setUser] = useState ({});

  function handleLogin () {
    setUser({id:1,name:"Hikmet"})
    Navigate("/favories")
    
  };

  function handleLogout () {
    setUser({})
  };


  return (
    <>
      <Navbar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/favories" element={<PrivateRoute user={user}><Favories /></PrivateRoute>} />
      </Routes>
    </>
  )
}

export default App
