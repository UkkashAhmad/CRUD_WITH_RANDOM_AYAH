import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import CreateData from './Pages/CreateData'
import EditData from './Pages/EditData'
import DeleteData from './Pages/DeleteData'

function App() {


  return (
    <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/posts/create' element ={<CreateData/>}/>
    <Route path='/posts/edit/:id' element ={<EditData/>}/>
    <Route path='/posts/delete/:id' element ={<DeleteData/>}/>
  </Routes>
    </>
  )
}

export default App
