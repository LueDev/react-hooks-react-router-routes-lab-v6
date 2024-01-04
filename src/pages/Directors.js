import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import {v4 as uuidv4} from 'uuid';

function Directors() {

  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/directors')
    .then(res => res.json())
    .then(data => setDirectors(data))
    .catch(error => console.error(error))
  }, [])

  if(!directors){return <h1>Loading...</h1>}

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {directors.map((director) => {
          return (
            <article key={uuidv4()}>
              <h2>{director.name}</h2>
              <ul>
                {director.movies.map(movie => <li key={uuidv4()}>{movie}</li>)}
              </ul>
            </article>
          )
        })}
      </main>
    </>
  );
};

export default Directors;
