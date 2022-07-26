import React, { useEffect, useState } from "react";
import "./Rows.css";
import axios from "axios";

const Rows = ({ title, fetchURL, isLargeRow=null }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        "https://api.themoviedb.org/3" + fetchURL
      );
      console.log(request);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchURL]);

  return (
    <div className="rowRoot">
      <h4>{title}</h4>
      <div className="posters">
      {movies.map((movie) =>
((isLargeRow && movie.poster_path)  ||
(!isLargeRow && movie.backdrop_path)) &&(
<img
  className="poster"
  key={movie.id}
  src={base_url + (isLargeRow?movie.poster_path:movie?.backdrop_path)}
  alt={movie?.name}
/>
)
      )
}
      </div>
    </div>
  );
};

export default Rows;
