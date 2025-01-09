import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Contact = () => {
    const id=5;
    const navigate =useNavigate()

  const toAbout=()=>{
    navigate('/About',{state:{id:id}})
   
  }
  return (
    <div>
      <h1>
        This is contact page
      </h1>
      <button onClick={toAbout}>navigate to about </button>
  
      <h1>
        Using use Navigate below  and sending data with use location 
     </h1>
        
            <button onClick={toAbout}>About</button>
    </div>
    
  )
}

export default Contact
