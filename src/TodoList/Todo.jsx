import React, { useState } from 'react'
const Todo = () => {
    const RemoveAll=()=>{
        setlistdata([])
    }
    const [activity,setactivity]=useState('')
    const [listdata,setlistdata]=useState([])
    const Addactivity=()=>{
    //     setlistdata([...listdata,activity],setactivity(""))
    // console.log(listdata)
    setlistdata((listdata)=>{
        const updatedlist=[...listdata,activity]
        console.log(updatedlist)
        setactivity("")
        return updatedlist
    })
    }
    const Removebtn=(i)=>{
const updatedlist = listdata.filter((cval,ind)=>{
                 return i !==ind
                    })
                        setlistdata(updatedlist)
    }
  return (
    <>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
        <div className='w-50 border bg-secondary text-white p-5'>
           <input type="text" name="name" className='form-control' value={activity} onChange={e=>setactivity(e.target.value)}/>
        </div>
           <div>

           <button onClick={Addactivity} className='btn-success'>Add</button>
           </div>
                    <div>
                        {listdata!=[]&&listdata.map((cval,i)=>(
                       <p key={i}>
                                    {cval}
                                   <button  onClick={()=>Removebtn(i)} className='btn btn-danger'>
                                  Remove
                                </button>     
                                {listdata.length>=1 &&
                                <button onClick={RemoveAll}>Remove All</button>
                                }  
                            </p>
                        
                        ))}
                    </div>
      </div>
    </>
  )
}

export default Todo
