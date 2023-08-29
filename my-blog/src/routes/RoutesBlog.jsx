import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../views/Home'
import Posteos from '../components/Posteos'
import Navbar from '../components/NavBar/Navbar'


export default function RoutesBlog() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/posteos" element={<Posteos/>}/>
        </Routes>
    </Router>
    </>
  )
}
