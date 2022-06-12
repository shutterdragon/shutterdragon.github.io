import { NavLink } from "react-router-dom";
import ninja from "../img/Ninja.png";

function Header() {
  return (
    <header>
      <div className="container-fluid">
        <div className="logoTitle">
          <img src={ninja} alt="ninja" />
          <h1>Hi, I’m Prathap Ravishankar</h1>
        </div>
        <nav>
          <NavLink className="main-link main-portfolio" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="main-link main-about" to="/about">
            About me
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
