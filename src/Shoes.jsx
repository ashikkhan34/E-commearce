import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import './Shoes.css'


function Shoes() {
  const shoes = ()=>{
    alert('Are you buy this shoes, go to cantact page and message with Ashik khan')
  }
  return (
    <div>
      <div className='row'>
        <Header />
        <div className='col-md-3'><Sidebar /></div>
        <div className='col-md-3'>
          <div className='shoes'>
            <img src="img/shoes/addidas.jpeg" alt="" className='w-100' />
            <h5>$10 USD</h5>
            <h4><a href="">Addidas</a></h4>
            <button className=' btn btn-primary' onClick={shoes}>Buy now</button>

          </div>
          <div className='shoes'>
            <img src="img/shoes/bata.jpeg" alt="" className='w-100' />
            <h5>$20 USD</h5>
            <h4><a href="">Bata</a></h4>
            <button className=' btn btn-warning' onClick={shoes}>Buy now</button>

          </div>
        </div>
        <div className='col-md-3'>
          <div className='shoes'>
            <img src="img/shoes/lambargini.jpeg" alt="" className='w-100' />
            <h5>$10 USD</h5>
            <h4><a href="">Lambargini</a></h4>
            <button className=' btn btn-secondary' onClick={shoes}>Buy now</button>

          </div>
          <div className='shoes'>
            <img src="img/shoes/nike.jpeg" alt="" className='w-100' />
            <h5>$10 USD</h5>
            <h4><a href="">Nike</a></h4>
            <button className=' btn btn-danger' onClick={shoes}>Buy now</button>

          </div>
        </div>
        <div className='col-md-3'>
          <div className='shoes'>
            <img src="img/shoes/panda.jpeg" alt="" className='w-100' />
            <h5>$12 USD</h5>
            <h4><a href="">Panda</a></h4><br />
            <button className=' btn btn-success' onClick={shoes}>Buy now</button>

          </div>
          <div className='shoes'>
            <img src="img/shoes/sports.jpeg" alt="" className='w-100' />
            <h5>$9 USD</h5>
            <h4><a href="">Sport</a></h4>
            <button className=' btn btn-primary' onClick={shoes}>Buy now</button>

          </div>
        </div>

      </div>
      <div className='bkfoot' >
            <h3>@All resarved by Ashik khan</h3>
        </div>
    </div>
  )
}

export default Shoes
