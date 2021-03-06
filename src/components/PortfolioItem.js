import { Link } from "react-router-dom";
import Star from "../img/Star.png";

function PortfolioItem({ item, index }) {
  return (
    <Link to={"/portfolio/" + item.url}>
      <div
        className="portfolioItem animate__animated animate__fadeIn"
        style={{ animationDelay: `${index / 2}s` }}
      >
        <div className="titleWStar">
          <img className="star" src={Star} alt="" />
          <div className="titlePic">
            <h2>{item.title}</h2>
            <img
              src={"img/thumbnails/" + item.url + ".jpg"}
              alt="Mars Mission"
            />
          </div>
        </div>
        <div className="publicationName">{item.publication}</div>
        <div className="description">{item.description}</div>
      </div>
    </Link>
  );
}

export default PortfolioItem;
