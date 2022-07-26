import React, { useEffect, useState } from "react";
import "./Banners.css";
import axios from "axios";
import requests from "../Request";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const truncate = (string, n) =>
    string?.length > n ? string.substring(0, n - 1) + "..." : string;
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(
        "https://api.themoviedb.org/3" + requests.fetchNetflixOriginals
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchData();
  }, []);
  console.log("ACAAAAAAAAAAAa", movie);
  return (
    <div
      className="root"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="content">
        <h1 className="bannerName">
          <strong>{movie.name}</strong>
          {console.log(movie)}
        </h1>
        <div className="DivDescription">
          <h6 className="Description">{truncate(movie.overview, 150)}</h6>
        </div>
        <div>
          <button className="ButtonPlay">Play</button>
          <button className="ButtonList">My List</button>
        </div>
        <div className="fakebutton"></div>
      </div>
    </div>
  );
};

export default Banner;
