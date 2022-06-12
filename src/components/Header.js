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
          <NavLink to="#">Portfolio</NavLink>
          <NavLink to="#">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
