import { useParams, NavLink } from "react-router-dom"
import Posts from "../components/NavBar/Posts";

export default function LeerPost() {
  const post = Posts()
    const {id = "id - no encontrado"} = useParams();
    console.log(`esta leyendo el posteo ID:${id}`)
    
  return (
    <>
    <h3>Post N° {id}</h3>
    <div>
      <p></p>
      <NavLink to="/posteos">
        <button>Volver a Posteos</button>
      </NavLink>
    </div>
    </>
  )
}
