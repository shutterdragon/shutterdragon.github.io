import { useEffect, useState } from "react";
// import portfolioData from "../data.json";
import Header from "../components/Header";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio() {
  const [portfolioList, setPortfolioList] = useState([]);

  async function getPortfolioList() {
    fetch("../data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("data", data);
        setPortfolioList(data);
      });
  }

  useEffect(() => {
    getPortfolioList();
    return () => {};
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="portfolio-container">
        {portfolioList.map(function (item) {
          console.log(item);
          return <PortfolioItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
