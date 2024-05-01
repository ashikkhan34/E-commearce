import React from 'react'
import './Bike.css'
import Header from './Header'
import Sidebar from './Sidebar'

function Bike() {
  const bike = ()=>{
    alert("Are you buy this bike. Go to contact page and contact with Ashik khan...")
  }
  return (
    <div>
     <Header />
      <div className='row'>
        <div className='col-md-3'><Sidebar /></div>
          <div className='col-md-3'>
            <div className='bikepost'>
            <img src="img/bike1.webp" alt="" className=' w-100'/>
            <h5><a href="">Suzuki</a></h5>
            <h5><a href="">$4500 USD</a></h5>
            <button className=' btn btn-primary' onClick={bike}>Buy now</button>
            
        </div>

        
        <div className='bikepost'>
            <img src="img/bike2.jpeg" alt="" className=' w-100'/>
            <h5><a href="">Suzuki</a></h5>
            <h5><a href="">$4500 USD</a></h5>
            <button className=' btn btn-secondary' onClick={bike}>Buy now</button>
            
        </div>

        </div>

        <div className='col-md-3'>
        <div className='biker'>
        <div className='bikepost'>
            <img src="img/bike3.jpeg" alt="" className='h-50 w-100'/>
            <h5><a href="">Pusler</a></h5>
            <h5><a href="">$4000 USD</a></h5><br />
            <button className=' btn btn-success' onClick={bike}>Buy now</button>
            
        </div>

        </div>
        <div className='bikepost'>
            <img src="img/bike4.png" alt="" className=' w-100'/>
            <h5><a href="">MT-15</a></h5>
            <h5><a href="">$5500 USD</a></h5><br />
            <button className=' btn btn-warning' onClick={bike}>Buy now</button>
            
        </div>

        </div>
        <div className='col-md-3'>
        <div className='biker'>
        <div className='bikepost'>
            <img src="img/bike5.jpeg" alt="" className='h-50 w-100'/>
            <h5><a href="">kawsaki ninga</a></h5>
            <h5><a href="">$6500 USD</a></h5><br />
            <button className=' btn btn-primary' onClick={bike}>Buy now</button>
            
        </div>

        </div>
        <div className='bikepost'>
            <img src="img/bike6.jpeg" alt="" className=' w-100'/>
            <h5><a href="">Apache </a></h5>
            <h5><a href="">$4100 USD</a></h5>
            <button className=' btn btn-success' onClick={bike}>Buy now</button>
            
        </div>
        

        </div>
      </div>
        <div className='bkfoot' >
            <h3>@All resarved by Ashik khan</h3>
        </div>

      </div>
  )
}

export default Bike
