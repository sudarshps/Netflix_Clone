import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";


const TitleCards = ({title,category}) => {
  const [movieList, setMovieList] = useState([]);

  const cardsRef = useRef()

  const getMovie = () => {
    fetch(
      `https://api.themoviedb.org/3${category?category:'/movie/now_playing'}?api_key=${import.meta.env.VITE_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };




  

  useEffect(() => {
    cardsRef.current.addEventListener('wheel',handleWheel)
    getMovie()
  }, []);

  const handleWheel = (event) =>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  return (
<div className="titlecards">
      <h3>{title?title:'Polpular on Netflix'}</h3>
      <div className="card-list" ref={cardsRef}>
        {movieList.map((movie, index) => {
          return (
            <Link to={`/player/${movie.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt=""
              />
            </Link>
          );
        })}
      </div>
    </div>   
  );
};

export default TitleCards;
