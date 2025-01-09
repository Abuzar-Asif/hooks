import React from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Help from './Help'
const Main = () => {
  
    return (
    <>
    
    <h1>
        this is the main page 
    </h1>
      <BrowserRouter>
      <Routes>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Help' element={<Help/>}/>
      </Routes>
      <Link to='/'> main
      </Link>
      <Link to='/contact'> Contact
      </Link>
      <Link to='/About'> About
      </Link>
      <Link to='/help'> Help
      </Link>
      </BrowserRouter>
     
    
    </>
  )
}

export default Main
