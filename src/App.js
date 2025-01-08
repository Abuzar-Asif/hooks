import React from 'react'
import CrudReduxToolkit from './CrudReduxToolkit'
// import UseFormikprac from './UseFormikprac'
import { BrowserRouter,Routes, Route  } from 'react-router-dom'

const App = () => {
  return (
    <>
{/* <UseFormikprac/> */}
<BrowserRouter>
<Routes>

<Route path='/' element={<CrudReduxToolkit/>}>

</Route>
</Routes>
</BrowserRouter>

    </>
  )
}

export default App
