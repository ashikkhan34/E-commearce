import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Bike from './Bike';
import Phone from './Phone';
import Watch from './assets/Watch';
import Shoes from './Shoes';
import Laptop from './Laptop';
import Keybord from './assets/Keybord';


function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/bike' element={<Bike/>}></Route>
        <Route path='/phone' element={<Phone/>}></Route>
        <Route path='/watch' element={<Watch/>}></Route>
        <Route path='/Shoes' element={<Shoes/>}></Route>
        <Route path='/laptop' element={<Laptop/>}></Route>
        <Route path='/keybord' element={<Keybord/>}></Route>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
