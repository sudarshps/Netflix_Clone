import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_icon from "../../assets/profile_img.png";
import dropdown_icon from "../../assets/caret_icon.svg";
import { logout } from "../../utils/firebase";

const Navbar = () => {

    const navRef = useRef()

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(window.scrollY >= 130){
          navRef.current.classList.add('nav-dark')
        }else{
          navRef.current.classList.remove('nav-dark')
        }
      })
    },[])

  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={Logo} alt="Netflix-Logo" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse By Languages</li>
        </ul>
      </div>

      <div className="navbar-right">
        <img src={search_icon} alt="search_icon" className="icons" />
        <img src={bell_icon} alt="bell_icon" className="icons" />
        <div className="navbar-profile">
        <img src={profile_icon} alt="profile" className="profile" />
        <img src={dropdown_icon} alt="caret_icon" />
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out</p>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
