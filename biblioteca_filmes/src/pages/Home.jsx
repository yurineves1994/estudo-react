import "./MoviesGrid.css";

import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState();
  const [loading, setLoading] = useState(false);

  const getTopRatedMovie = async (url) => {
    setLoading(true);

    const res = await fetch(url);
    const data = await res.json();

    setLoading(false);

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${movieURL}top_rated?${apiKey}`;

    getTopRatedMovie(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {loading && <p>Carregando...</p>}
        {topMovies &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Home;
