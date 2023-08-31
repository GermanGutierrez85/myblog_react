import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../views/Home'
import Posteos from '../views/Posteos'
import Navbar from '../components/NavBar/Navbar'
import Crear from '../views/Crear'
import LeerPost from '../views/LeerPost'


export default function RoutesBlog() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posteos" element={<Posteos/>}/>
            <Route path='posteos/leer/:id' element={<LeerPost/>}/>
            <Route path="/crear" element={<Crear/>}/>
        </Routes>
    </Router>
    </>
  )
}
