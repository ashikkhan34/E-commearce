import React from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import '../Watch.css'


function Watch() {
    const watch = ()=>{
        alert("Are you buy this watch. Go to contact page and contact with Ashik khan...")
    }
  return (
    <div>
      <div className='row'>
        <Header />
        <div className='col-md-3'><Sidebar /></div>
        <div className='col-md-3'>
            <div className='watch'>
                <img src="img/watch/appolewacth.jpeg" alt="" /><br />
                <h5><a href="">$800</a></h5>
                <h4><a href="">apple watch</a></h4><br />
                <button className=' btn btn-primary' onClick={watch}>Buy now</button>
            </div> 
            <div className='watch'>
                <img src="img/watch/casiowatch.jpeg" alt="" />
                <h5><a href="">$300</a></h5>
                <h4><a href="">Casio watch</a></h4><br />
                <button className=' btn btn-secondary' onClick={watch}>Buy now</button>
            </div>


        </div>
        <div className='col-md-3'>
            <div className='watch'>
                <img src="img/watch/oppowatch.jpeg" alt="" />
                <h5><a href="">$400</a></h5>
                <h4><a href="">Oppo watch</a></h4><br />
                <button className=' btn btn-success' onClick={watch}>Buy now</button>
            </div>
            <div className='watch'>
                <img src="img/watch/relexwatch.jpeg" alt="" />
                <h5><a href="">$1200</a></h5>
                <h4><a href="">Rolex Watch</a></h4>
                <button className=' btn btn-danger' onClick={watch}>Buy now</button>
            </div>


        </div>
        <div className='col-md-3'>
            <div className='watch'>
                <img src="img/watch/vivowatch.jpeg" alt="" /><br />
                <h4><a href="">$100</a></h4>
                <h4><a href="">Vivo watch</a></h4><br />
                <button className=' btn btn-primary' onClick={watch}>Buy now</button>
            </div>
            <div className='watch'>
                <img src="img/watch/sumsungwatch.jpeg" alt="" /><br />
                <h5><a href="">$200</a></h5>
                <h4><a href="">Sumsung watch</a></h4>
                <button className=' btn btn-warning' onClick={watch}>Buy now</button>
            </div>


        </div>
      </div>
      <div className='bkfoot' >
            <h3>@All resarved by Ashik khan</h3>
        </div>

    </div>
  )
}

export default Watch
