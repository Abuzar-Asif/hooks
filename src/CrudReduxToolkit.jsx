import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CrudReduxToolkit = () => {
const boy=useSelector((state)=>state.boy)
console.log(`hellow this `)
  return (
    <>
    <center>
      <h1>
        Crud App with redux toolkit
      </h1>
      <Link to="/Create" className='btn btn-success my-3'>Create +</Link>
      <table className='table '>
        <thead>
        <tr>
        <th scope='col'>
          ID
        </th>
        <th scope='col'>
          Name
        </th>
        <th scope='col'>
          Email
        </th>
        <th scope='col'>
          Action
        </th>
        </tr>
        </thead>
        <tbody>
            {boy.map((cval,index)=>(   
          <tr key={index}>
            <td>
              {cval.id}
            </td>
              <td >
                  {cval.name}
              </td>
              <td>
                {cval.email}
              </td>
              <button className='btn bg-danger m-2  '>Edit</button>
              <button className='btn bg-primary'>Delete </button>
          </tr>
            ))}
        </tbody>
      </table>
      </center>
    </>
  )
}

export default CrudReduxToolkit
