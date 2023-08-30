import Posts from '../components/NavBar/Posts'
import { Navigate } from 'react-router-dom';

export default function Posteos(){
  const posts = Posts()
  
  //Funciones para alertas de botones
  const handleRead = (num) =>{ 
    alert(`LEER posteo ID ${num}`);
  };
  const handleSet = (num) =>{ 
    alert(`MODIFICAR posteo ID ${num}`);
  }
  //Renderizado de posteos
  const card = posts.map((post)=>(
    <div className="postsCards" key={post.id}>
      <p>{post.titulo}</p>
      <div className="buttons">
         <button onClick={(e)=>{
            e.preventDefault();
             <Navigate to="/leer"/>}}>LEER</button>
         <button onClick={(e)=>{
            e.preventDefault();
            handleSet(post.id)}}>MODIFICAR</button>
      </div>
    </div>
 ));

  return (
    <>
      <h1>Posteos</h1>
      {card}
    </>
  )
}

