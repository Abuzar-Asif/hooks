import React from 'react'
import CrudReduxToolkit from './CrudReduxToolkit'
// import UseFormikprac from './UseFormikprac'
// import { BrowserRouter,Routes, Route  } from 'react-router-dom'
import Create from './Create'
import Todo from './TodoList/Todo'

const App = () => {
  return (
    <>
{/* <UseFormikprac/> */}
{/* <BrowserRouter>
<Routes>

<Route path='/' element={<CrudReduxToolkit/>}/>
<Route path='/Create' element={<Create/>}/>
</Routes>
</BrowserRouter> */}
<Todo/>

    </>
  )
}

export default App
