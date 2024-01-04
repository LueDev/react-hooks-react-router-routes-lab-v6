import NavBar from "../components/NavBar";
import { useRouteError, Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Oops! Looks like something went wrong.</h1>
        <h4>Go to the home page <Link to="/">here</Link> </h4>
      </main>
    </>
  );
}

export default ErrorPage;