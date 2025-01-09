import React, { useState } from 'react'

const PracticeTodo = () => {
    const [inp,setinp]=useState('')
    const [activity,setactivity]=useState([])
    const AddValue=()=>{
        setactivity([...activity,inp])

    }
    const remove=(ind)=>{
        setactivity(activity.filter((val,i)=>{
            return ind !=i;
        }))
    }
    const Edit =()=>{

    }
  return (
    <>
    <center>
     <div>
        <div>
            <input type="text" placeholder='Enter values to add'  value={inp} onChange={(e)=>{setinp(e.target.value)}}/>
            <button onClick={AddValue}>Add </button>
        </div>
        <div>
            {activity.map((cval,ind)=>(
                <p key={ind}>
                        {cval}
                <button onClick={()=>{remove(ind)}}>remove</button>
                <button onClick={()=>{Edit(ind)}}>Edit</button>
                </p>
            ))}

        </div>
        <div>
            {activity.length>=1 && <button onClick={()=>{
                setactivity([])
            }}> Remove All </button>}
        </div>
        </div>
        </center> 
    </>
  )
}

export default PracticeTodo
