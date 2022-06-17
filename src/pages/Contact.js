import Header from "./../components/Header";
import { Link, NavLink } from "react-router-dom";
import ninja from "../img/Ninja.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
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
      <div className="contact-content">
        <Link to="mailto:prathapravishankar@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
        <Link to="https://api.whatsapp.com/send?phone=+919962549940">
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
        <Link to="tel:+919962549940">
          <FontAwesomeIcon icon={faPhone} />
        </Link>
      </div>
    </div>
  );
}

export default Contact;
