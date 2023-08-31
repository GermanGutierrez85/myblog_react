import Posts from '../components/NavBar/Posts'
import { useNavigate } from 'react-router-dom';

export default function Posteos(){
  const posts = Posts()
  const navegate = useNavigate();
  
  //Funciones para alertas de botones
  const handleRead = (num) =>{ 
    navegate(`/posteos/leer/:${num}`)
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
             handleRead(post.id)}}>LEER</button>
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

