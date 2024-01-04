import {Link} from 'react-router-dom';
import {v4 as uuidv4} from "uuid"

function MovieCard({id, title, time, genres}) {
  
  const genresArr = Array.from(genres)
  return (
    <article>
        <h2>{title}</h2>
        {/* What should go here? */}
        <p>{time} Minutes</p> 
        {genresArr.map(genre => <span key={uuidv4()}>{genre}</span>)}
        <br/><Link to={`/movie/${id}`}> View Info</Link>
    </article>
  );
};

export default MovieCard;