import React, { useState } from 'react'
const Create = () => {
    const [fname,setname]=useState('')
    const [femail,setemail]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
    }
  return (
    <>
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border bg-secondary text-white p-5'>
                <h3>
                    Add New Users 
                </h3>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" className='form-control' value={fname.name}  onChange={e=>setname(e.target.value)}/>
                    </div>
                    <div>
                    <label htmlFor="Email">Email</label>
                    <input type="Email" name="Email" className='form-control'  value={femail.email} onChange={e=>setemail(e.target.value)}/>
                    </div>
                    <br />
                    <button  className='btn btn-info '>Submit</button>
                </form>
        </div>
    </div>
      
    </>
  )
}

export default Create
