import {Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css'

//!Components
import Landing from './views/Landing'
import Home from './views/Home'
import Detail from './views/Detail'
import NewGame from './views/NewGame'
import Nav from './components/Nav'


function App() {

  return (
    <div>
    {<Nav/>}
    <Routes>
          <Route
            path="/"
            element={<Landing/>}/>

          <Route
            path='/home'
            element={<Home/>}/>

          <Route
            path='/detail/:id'
            element={<Detail/>}/>

          <Route
          path='/newgame'
          element={<NewGame/>}/>
    </Routes>
    </div>
  )
}

export default App
