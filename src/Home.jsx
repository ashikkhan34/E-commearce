import React from 'react'
import './Home.css'
import Header from './Header'
import Sidebar from './Sidebar'

function Home() {
  return (
    <div className='row'>
        <Header />
        <div className='col-md-3'><Sidebar /></div>

        
        <div className='col-md-9'>
            <h1>All chatagory produces are here...</h1>
            <img src="img/shop.png" alt="" className='shop' />
            <img src="img/download.jpeg" alt="" className='bike' />

            <p>An e-commerce website is an online platform where businesses sell products or services to customers over the internet. These websites typically allow users to browse through a catalog of items, add them to a virtual shopping cart, and proceed to checkout using various payment methods. E-commerce websites often feature search functionality, filters, and categories to help users find what they're looking for quickly. They may also include reviews, ratings, and product recommendations to assist shoppers in making purchasing decisions. Security measures such as encryption and secure payment gateways are crucial to protect sensitive customer information. E-commerce websites have revolutionized the way people shop, offering convenience, accessibility, and a wide range of products available at the click of a button.</p>
            

        </div>
        <div className='footer'>
            <h3>@All resarved by Ashik khan</h3>
        </div>
    


    </div>
  )
}

export default Home
