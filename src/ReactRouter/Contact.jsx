import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const navigate =useNavigate()

  const toAbout=()=>{
    navigate('/About')
  }
  return (
    <div>
      <h1>
        This is contact page
      </h1>
      <button onClick={toAbout}>navigate to about </button>
  
      <h1>
        Using use Navigate below 
     </h1>
        
            <button onClick={toAbout}>About</button>
    </div>
    
  )
}

export default Contact
