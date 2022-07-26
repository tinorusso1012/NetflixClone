import React from "react";
import { makeStyles } from "@material-ui/core";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Rows from "../components/Rows";
import "./Home.css";
import requests from "../Request";
const Home = () => {
  return (
    <div className="rootHome">
      <Header />
      <Banner />
      <Rows
        title="NetflixOriginals"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Rows title="TRENDING" fetchURL={requests.fetchTrending} />
      <Rows title="Comedy Movies:" fetchURL={requests.fetchComedyMovies} />
       <Rows title="Top Rated:" fetchURL={requests.fetchTopRated} />
      <Rows title="Action Movies:" fetchURL={requests.fetchActionMovies} />
      <Rows title="Horror Movies:" fetchURL={requests.fetchHorrorMovies} /> 
      <Rows title="Romance Movies:" fetchURL={requests.fetchRomanceMovies} />
      {/* <Rows title="Documentaries" fetchURL={request.fetchDocumentaries} />  */}
    </div>
  );
};
export default Home;
