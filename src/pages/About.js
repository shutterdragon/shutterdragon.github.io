import Header from "./../components/Header";
import { Link, NavLink } from "react-router-dom";
import ninja from "../img/Ninja.png";

function About() {
  return (
    <div className="page">
      <Header />
      <div className="filter-container">
        <NavLink className="about-link" to="/about">
          About me
        </NavLink>
        <NavLink className="contact-link" to="/contact">
          Contact me
        </NavLink>
      </div>
      <div className="about-content">
        <img src={ninja} alt="ninja" style={{ alignSelf: "flex-end" }} />
        <div className="text-content">
          <p>
            Detailed intro of the project and the text goes here. Detailed intro
            of the project and the text goes here. Detailed intro of the project
            and the text goes here. Detailed intro of the project and the text
            goes here. Detailed intro of the project and the text goes here.
            Detailed intro of the project and the text goes here. Detailed intro
            of the project and the text goes here. Detailed intro of the project
            and the text goes here. Detailed intro of the project and the text
            goes here.
          </p>
          <Link className="download-link" to="#">
            Download Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
