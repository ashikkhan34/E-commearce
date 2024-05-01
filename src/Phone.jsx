import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import './Phone.css'

function Phone() {
    const phone = ()=>{
        alert('Are you buy this phone, Go to contact page and message with Ashik khan')
    }
  return (
    <>
    <div className='row'>
        <Header />
        <div className='col-md-3'><Sidebar /></div>
        <div className='col-md-3'>
            <div className='section'>
                <div className='phone'>
                <img src="img/phone/iphone15.jpeg" alt="" />
                <h5><a href="">$1500</a></h5>
                <h4><a href="">iphone 15</a></h4>
                <button className=' btn btn-danger' onClick={phone}>Buy now</button>
                </div>
                
            </div>
            <div className='section'>
                <div className='phone'>
                <img src="img/phone/iphone15pro.jpeg" alt="" />
                <h5><a href="">$1300</a></h5>
                <h4><a href="">iphone 15 pro</a></h4>
                <button className=' btn btn-success' onClick={phone}>Buy now</button>
                </div>
                
            </div>
           
        </div>
        <div className='col-md-3'>
            <div className='section'>
                <div className='phone'>
                <img src="img/phone/iphone15promax.jpeg" alt="" />
                <h5><a href="">1800$</a></h5>
                <h4><a href="">iphone 15 pro max</a></h4>
                <button className=' btn btn-primary' onClick={phone}>Buy now</button>
                </div>
                
            </div>
            <div className='section'>
                <div className='phone'>
                <img src="img/phone/redminot13pro.jpeg" alt="" />
                <h5><a href="">$500</a></h5>
                <h4><a href="">Redmi not 13 pro</a></h4>
                <button className=' btn btn-warning' onClick={phone}>Buy now</button>
                </div>
                
            </div>
           
        </div>
        <div className='col-md-3'>
            <div className='section'>
                <div className='phone'>
                <img src="img/phone/sumsung s23ultra.jpeg" alt="" />
                <h5><a href="">$1700</a></h5>
                <h4><a href="">Sumsung s23 ultra</a></h4>
                <button className=' btn btn-danger' onClick={phone}>Buy now</button>
                </div>
                
            </div>
            <div className='section'>
                <div className='phone'>
                <img src="img/phone/vivoV29.jpeg" alt="" />
                <h5><a href="">$900</a></h5>
                <h4><a href="">Vivo V29</a></h4>
                <button className=' btn btn-secondary' onClick={phone}>Buy now</button>
                </div>
                
            </div>
           
        </div>
        
        <div className='bkfoot' >
            <h3>@All resarved by Ashik khan</h3>
        </div>

    
    </div>
    </>
  )
}

export default Phone
