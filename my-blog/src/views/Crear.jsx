import { useState } from "react";
import Posts from "../components/NavBar/Posts";

export default function Crear() {
    const posts = Posts();
    const [post, setPost] = useState(posts);
    const [guardado, setGuardado] =useState('');

 function handleSubmit(e){
  
  e.preventDefault();
   const newPost = {
    id: Math.floor(Math.random()*1000) + post.length,
    titulo: e.target.titulo.value,
    texto: e.target.texto.value,
    user_id: Math.floor(Math.random()*1000) + post.length,
    usuario: e.target.usuario.value,
  };
  setPost([...post, newPost]);
  e.target.titulo.value ='';
  e.target.texto.value ='';
  e.target.usuario.value ='';
 }

  return (
    <>
    <h3>Completa para crear tu post</h3>
    <form onSubmit={handleSubmit}>
      <input type="text" name="usuario" placeholder="Usuario" />
      <input type="text" name="titulo" placeholder="Titulo" />
      <input type="text" name="texto" placeholder="Tu texto" />
      <input type="submit" value="Guardar" onClick={()=>{setGuardado('Guardado con exito!')}}/>
    </form>
    <p>{guardado}</p>
    </>
  )
}
