import React from 'react'
import { NavLink } from 'react-router-dom'


function Sidebar() {
  return (
    <div>
      <div className='col-md-3'>
        <div className='sidebar'>
    <ul className='sideul'>
        <li><a href=""><NavLink to={'/Bike'}>Bike</NavLink></a></li>
        <li><a href=""><NavLink to={'/Phone'}>Phone</NavLink></a></li>
        <li><a href=""><NavLink to={'/Watch'}>Watch</NavLink></a></li>
        <li><a href=""><NavLink to={'/Shoes'}>Shoes</NavLink></a></li>
        <li><a href=""><NavLink to={'/Laptop'}>Laptop</NavLink></a></li>
        <li><a href=""><NavLink to={'/Keybord'}> Keybord</NavLink></a></li>

    </ul>
    </div>
        </div>
    </div>
  )
}

export default Sidebar
