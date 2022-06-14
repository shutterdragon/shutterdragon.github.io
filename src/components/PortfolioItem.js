import { Link } from "react-router-dom";
import Star from "../img/Star.png";

function PortfolioItem({ item }) {
  return (
    <Link to={"/portfolio/" + item.url}>
      <div className="portfolioItem animate__animated animate__fadeIn">
        <div className="titleWStar">
          <img className="star" src={Star} alt="" />
          <div className="titlePic">
            <h2>{item.title}</h2>
            <img src="../img/thumbnail.jpeg" alt="Mars Mission" />
          </div>
        </div>
        <div className="publicationName">{item.publication}</div>
        <div className="description">{item.description}</div>
      </div>
    </Link>
  );
}

export default PortfolioItem;
