import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signin from './Signin'
import Login from './Login'
function App() {

  return (
<>
<BrowserRouter>
<Routes>
  <Route path="/" element= {<Signin />}> </Route>
  <Route path="/login" element= {<Login />}> </Route>
</Routes>
</BrowserRouter>
</>
  )
}

export default App
