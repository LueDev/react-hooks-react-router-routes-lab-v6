import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import {v4 as uuidv4} from 'uuid';

function Movie() {

  const [movieDetails, setMovieDetails] = useState({})
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(res => res.json())
    .then(data => setMovieDetails(() => data))
  }, [movieId])

  // console.log(movieDetails)

//Used to return a temporary value while the async operation
//of setMovieDetails(data) finishes. Otherwise, no value is 
//passed to the movieCard component
  if(!movieDetails.title){
    return <h1>Loading...</h1>;
  }; 

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
          <h1>{movieDetails.title}</h1>
          <p>{movieDetails.time} Minutes</p>
          {movieDetails.genres.map(genre => <span key={uuidv4()}>{genre}</span>)}
          

      </main>
    </>
  );
};

export default Movie;
