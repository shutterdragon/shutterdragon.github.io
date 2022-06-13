import Star from "../img/Star.png";

function PortfolioItem({ item }) {
  return (
    <div className="portfolioItem">
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
  );
}

export default PortfolioItem;
