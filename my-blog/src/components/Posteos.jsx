import { useState } from 'react';
const posts = [
  {
    "id": 12,
    "titulo": "Spiderman",
    "texto": "Joven héroe con poderes arácnidos que combate el crimen balanceándose por Nueva York.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
  {
    "id": 14,
    "titulo": "X-MEN",
    "texto": "Equipo de mutantes con habilidades únicas que luchan por la coexistencia pacífica entre humanos y mutantes.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
  {
    "id": 16,
    "titulo": "Capitán América",
    "texto": "Soldado mejorado con un escudo indestructible que lidera a los Vengadores en la defensa del mundo.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
  {
    "id": 17,
    "titulo": "Thanos",
    "texto": "Titán obsesionado con el poder y las Gemas del Infinito, busca la aniquilación para equilibrar el universo.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
    {
    "id": 18,
    "titulo": "Ant-Man",
    "texto": "Héroe capaz de encogerse y controlar insectos con un traje especial para combatir el mal.",
    "user_id": 7,
    "usuario": "stan_lee"
  },
]

export default function Posteos(){
  const [post, setPost] = useState(posts)


 function handleSubmit(e){
    e.preventDefault();
   const newPost = {
    id: (post.length + 1),
    titulo: e.target.titulo.value,
    texto: e.target.texto.value,
    user_id: Math.floor(Math.random()) + post.length,
    usuario: e.target.usuario.value,
  };
  setPost([...post, newPost])

}
  //Funciones para alertas de botones
  const handleRead = (num) =>{ 
    alert(`LEER posteo ID ${num}`);
  };
  const handleSet = (num) =>{ 
    alert(`MODIFICAR posteo ID ${num}`);
  }
  //Renderizado de posteos
  const card = post.map((post)=>(
    <div className="postsCards" key={post.id}>
      <p>{post.titulo}</p>
      <div className="buttons">
         <button onClick={(e)=>{
            e.preventDefault();
            handleRead(post.id)}}>LEER</button>
         <button onClick={(e)=>{
            e.preventDefault();
            handleSet(post.id)}}>MODIFICAR</button>
      </div>
    </div>
  ));

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="usuario" placeholder="Usuario" />
      <input type="text" name="titulo" placeholder="Titulo" />
      <input type="text" name="texto" placeholder="Tu texto" />
      <input type="submit" value="Guardar" />
    </form>
      <h1>Posteos</h1>
      {card}
    </>
  )
}

