// import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

function WelcomePage() {
  return (
    <div className="container">
      <main>
        <h1 className="main-title">Coming Soon</h1>
        <nav className="socialmenu">
          <a
            href="https://www.linkedin.com/in/eunicedhivya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/eunicedhivya/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://codepen.io/eunicedhivya"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faCodepen} />
          </a>
        </nav>
      </main>

      <footer>© 2021 Eunice Dhivya</footer>
    </div>
  );
}

export default WelcomePage;
