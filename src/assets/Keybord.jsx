import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import "./Keybord.css"

function Keybord() {
    const keybord = ()=>{
        alert("Are you buy this keybord , go to cantact page and message with Ashik khan")
    }
  return (
    <div>
      <div className='row'>
        <Header />
        <div className='col-md-3'><Sidebar/></div>
        <div className='col-md-3'>
            <div className='keybord'>
                <img src="img/keybord/A tech v100.jpeg" alt="" />
                <h5>$6</h5>
                <h4><a href="">A tech v100</a></h4>
                <button className='btn btn-primary' onClick={keybord}>Buy now</button>
            </div>
            <div className='keybord'>
                <img src="img/keybord/a4tech.jpeg" alt="" />
                <h5>$6</h5>
                <h4><a href="">A4 tech</a></h4>
                <button className='btn btn-success' onClick={keybord}>Buy now</button>
            </div>

        </div>
        <div className='col-md-3'>
            <div className='keybord'>
                <img src="img/keybord/applek.png" alt="" />
                <h5>$10</h5>
                <h4><a href="">Apple</a></h4>
                <button className='btn btn-secondary' onClick={keybord}>Buy now</button>
            </div>
            <div className='keybord'>
                <img src="img/keybord/mecanical.jpeg" alt="" />
                <h5>$12</h5>
                <h4><a href="">Mecanical</a></h4>
                <button className='btn btn-danger' onClick={keybord}>Buy now</button>
            </div>

        </div>
        <div className='col-md-3'>
            <div className='keybord'>
                <img src="img/keybord/rgb.jpeg" alt="" />
                <h5>$9</h5>
                <h4><a href="">RGB</a></h4>
                <button className='btn btn-warning' onClick={keybord}>Buy now</button>
            </div>
            <div className='keybord'>
                <img src="img/keybord/sumsungk.jpeg" alt="" />
                <h5>$6</h5>
                <h4><a href="">Sumsung</a></h4><br />
                <button className='btn btn-primary' onClick={keybord}>Buy now</button>
            </div>

        </div>

      </div>
      <div className='bkfoot' >
            <h3>@All resarved by Ashik khan</h3>
        </div>
    </div>
  )
}

export default Keybord
