import { useEffect, useState } from "react";
// import portfolioData from "../data.json";
import Header from "../components/Header";
import PortfolioItem from "../components/PortfolioItem";

function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [filtered, setFiltered] = useState([]);
  const [portfolioList, setPortfolioList] = useState([]);

  const categoryData = portfolioList.map((value) => {
    return value.filter;
  });

  const filterCategory = (category) => {
    if (filter == "all") {
      setData(Data);
      return;
    }
    const filteredData = Data.filter((value) => {
      return value.category == category;
    });
    setData(filteredData);
  };

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

  console.log("filter", filter);

  return (
    <div className="page">
      <Header />
      <div className="portfolio-container">
        <div className="portfolio__labels">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "illustration" ? "active" : ""}
            onClick={() => setFilter("illustration")}
          >
            Illustration
          </button>
          <button
            className={filter === "ux-ui" ? "active" : ""}
            onClick={() => setFilter("ux-ui")}
          >
            UX/UI
          </button>
        </div>
      </div>
      <div className="portfolio-container">
        {portfolioList.map(function (item, i) {
          console.log(item);
          return <PortfolioItem key={item.id} item={item} index={i} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
