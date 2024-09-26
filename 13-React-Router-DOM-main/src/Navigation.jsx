import { NavLink } from "react-router-dom"
import Favories from "./Fav"




function Navbar({user,handleLogout}) {


    return (
      <>
       <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
  <form className="container-fluid justify-content-start">
    <NavLink to="/" className="btn btn-outline-success me-2" type="button">Home</NavLink>
    <NavLink to="/contact" className="btn btn-sm btn-outline-secondary me-2" type="button">Contact</NavLink>
    <NavLink to="/aboutus" className="btn btn-sm btn-outline-secondary me-2" type="button">Aboutus</NavLink>
    {
        user.id ? 
        <>
        <NavLink to="/favories" className="btn btn-sm btn-outline-secondary me-2">Favories</NavLink>
        <NavLink onClick={handleLogout} className="btn btn-sm btn-outline-secondary me-2" type="button">logout</NavLink>
        </>
        :
        <NavLink to="/login" className="btn btn-sm btn-outline-secondary me-2" type="button">Login</NavLink>
    }
  </form>
</nav>

      </>
    )
  }
  
  export default Navbar
  