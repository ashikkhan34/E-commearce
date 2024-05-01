import React from 'react'
import Sidebar from './Sidebar';
import Header from "./Header"
import './Laptop.css'

function Laptop() {
    const laptop= ()=>{
        alert("Are you buy this laptop, go to contact page and message with Ashik khan")
    }
  return (
    <div>
      <div className='row'>
        <Header />
        <div className='col-md-3'><Sidebar /></div>
        <div className='col-md-3'>
            <div className='laptop'>
                <img src="img/laptop/acher.jpeg" alt="" />
                <h5>$900 USD</h5>
                <h4><a href="">Acher</a></h4>
                <button onClick={laptop} className='btn btn-primary'>Buy now</button>
            </div>
            <div className='laptop'>
                <img src="img/laptop/apple.jpeg" alt="" />
                <h5>$1500 USD</h5>
                <h4><a href="">Apple</a></h4>
                <button onClick={laptop} className='btn btn-secondary'>Buy now</button>
            </div>

        </div>
        <div className='col-md-3'>
            <div className='laptop'>
                <img src="img/laptop/dell.jpeg" alt="" />
                <h5>$800 USD</h5>
                <h4><a href="">Dell</a></h4>
                <button onClick={laptop} className='btn btn-success'>Buy now</button>
            </div>
            <div className='laptop'>
                <img src="img/laptop/hp.jpeg" alt="" />
                <h5>$700 USD</h5>
                <h4><a href="">Hp</a></h4>
                <button onClick={laptop} className='btn btn-primary'>Buy now</button>
            </div>

        </div>

        <div className='col-md-3'>
            <div className='laptop'>
                <img src="img/laptop/lenevo.jpeg" alt="" />
                <h5>$900 USD</h5>
                <h4><a href="">Lenevo</a></h4>
                <button onClick={laptop} className='btn btn-danger'>Buy now</button>
            </div>
            <div className='laptop'>
                <img src="img/laptop/sumsung.jpeg" alt="" />
                <h5>$1000 USD</h5>
                <h4><a href="">Sunsung</a></h4>
                <button onClick={laptop} className='btn btn-warning'>Buy now</button>
            </div>

        </div>


      </div>
      <div className='bkfoot' >
            <h3>@All resarved by Ashik khan</h3>
        </div>
    </div>
  )
}

export default Laptop
