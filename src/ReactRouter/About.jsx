import React from 'react'
import { useLocation } from 'react-router-dom'

const About = () => {
    const loca=useLocation()

  return (
    <div>
      <h1>
        This is about page
      </h1>
      <p>
      THIS IS ID :  {loca.state.id}
      </p>
    </div>
  )
}

export default About
