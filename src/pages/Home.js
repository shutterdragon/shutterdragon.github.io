import React from "react";
import ninja from "../img/Ninja.png";
import { Link } from "react-router-dom";

function Home() {
  console.log(ninja);
  return (
    <div className="container">
      <div className="intro">
        <h1>Hi, I’m Prathap Ravishankar</h1>
        <p>. UI/UX Designer . Illustrator . Writer .</p>
        <img src={ninja} alt="ninja" />
        <nav className="homeNav">
          <Link className="portfolio-link" to="/portfolio">
            Portfolio
          </Link>
          <Link className="about-link" to="/about">
            About me
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Home;
