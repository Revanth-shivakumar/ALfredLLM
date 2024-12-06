import React from 'react'
import Home from './pages/Home/Home'
import { BrowserRouter as Router,Routes,Route, RouterProvider} from 'react-router-dom';


const routes =(
   <Router>
    <Routes>
        <Route path='/dashboard' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/signup' exact element={<Signup/>}/>
    </Routes>
    </Router>

)
const App = () => {
  return (
    <div>
        {routes}
    </div>
  )
}

export default App