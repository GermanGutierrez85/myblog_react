import { NavLink, Outlet } from "react-router-dom"

export default function Navbar() {
  return (
    <>
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/posteos">Posteos</NavLink>
            </li>
            <li>
                <NavLink to="/crear">Crear</NavLink>
            </li>
        </ul>
    </nav>
    <Outlet />
    </>
  )
}
