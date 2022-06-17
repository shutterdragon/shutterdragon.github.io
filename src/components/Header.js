import { Link, NavLink } from "react-router-dom";
import ninja from "../img/Ninja.png";

function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="logoTitle animate__animated animate__fadeIn">
          <Link to="/">
            <img src={ninja} alt="ninja" />
          </Link>
          <Link to="/">
            <h1>Hi, I’m Prathap Ravishankar</h1>
          </Link>
        </div>
        <nav className="mainNav animate__animated animate__fadeIn">
          <NavLink className="portfolio-link" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="about-link" to="/about">
            About me
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
