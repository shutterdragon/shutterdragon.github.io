import Header from "./../components/Header";
import { Link } from "react-router-dom";
import ninja from "../img/Ninja.png";

function About() {
  return (
    <div className="page">
      <Header />
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
