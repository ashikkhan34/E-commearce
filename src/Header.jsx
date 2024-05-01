import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="">Ashik</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="me-5 nav-item">
          <a className="nav-link " href=""><NavLink to={"/Home"}>Home</NavLink></a>
        </li>
        <li className="me-5 nav-item">
          <a className="nav-link" href=""><NavLink to={"/About"}>About</NavLink></a>
        </li>
        <li className="me-5 nav-item">
          <a className="nav-link" href=""><NavLink to={"/Contact"}>Contact</NavLink></a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="text" placeholder="Search"/>
        <button className="btn btn-primary" type="button">Search</button>
      </form>
    </div>
  </div>
</nav>




    </div>
  )
}

export default Header
