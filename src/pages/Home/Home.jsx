import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Titlecards from "../../components/TitleCards/TitleCards.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import netflix_logo from "/Netflix_Symbol_RGB.png";
import play_logo from "../../assets/play_icon.png";
import info_logo from "../../assets/info_icon.png";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  return (
    <>
      <div className="home">
        <Navbar />
        <div className="user-home">
  <div className="row">
    <div className="col-3">
      <img src={netflix_logo} alt="Netflix Logo" />
    </div>
    <div className="col-9">
      <h2>MOVIES</h2>
    </div>
  </div>

  <div className="synopsis">
    <h2>
      Mission: Impossible -  Dead Reckoning
    </h2>
    <p>
      Ethan Hunt (Tom Cruise) and his IMF team embark on their most
      dangerous mission yet: To track down a terrifying new weapon that
      threatens all of humanity before it falls into the hands of a
      mysterious, all-powerful enemy.
    </p>
  </div>

  <div className="user-btns">
    <button className="btn" onClick={()=>navigate(`/player/177677`)}>
      <img src={play_logo} alt="Play Logo" />
      Play
    </button>
    <button className="btn" id="dark-btn">
      <img src={info_logo} alt="Info Logo" />
      More Info
    </button>
  </div>
</div>

      </div>
      <div className="title-cards">
      <Titlecards title={"Now Playing"} category={"/movie/now_playing"} />
      <Titlecards title={"Top Rated - TV Series"} category={"/tv/top_rated"} />
      <Titlecards title={"Popular"} category={"/movie/popular"} />
      <Titlecards title={"Top Rated - Movies"} category={"/movie/top_rated"} />
      <Titlecards title={"Upcoming"} category={"/movie/upcoming"} />
      <Footer />
      </div>
      
    </>
  );
};

export default Home;
