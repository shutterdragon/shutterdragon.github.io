import Header from "./../components/Header";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="page">
      <Header />
      <div className="filter-container">
        <NavLink className="contact-link" to="/contact">
          Contact me
        </NavLink>
      </div>
      <div className="contact-content">
        <a
          href="mailto:prathapravishankar@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=919962549940"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a href="tel:+919962549940" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
