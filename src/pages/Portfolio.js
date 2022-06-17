import { useEffect, useState } from "react";
// import portfolioData from "../data.json";
import Header from "../components/Header";
import PortfolioItem from "../components/PortfolioItem";
import Filter from "./../components/Filter";

function Portfolio() {
  // const [filter, setFilter] = useState("all");

  // All Portfolio Records Held here
  const [portfolioList, setPortfolioList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeCat, setActiveCat] = useState("UI/UX");

  // const categoryData = portfolioList.map((value) => {
  //   return value.filter;
  // });

  // const filterCategory = (category) => {
  //   if (filter == "all") {
  //     setData(Data);
  //     return;
  //   }
  //   const filteredData = Data.filter((value) => {
  //     return value.category == category;
  //   });
  //   setData(filteredData);
  // };

  useEffect(() => {
    getPortfolioList();
  }, []);

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
        const filtered = data.filter((item) => {
          return item.category === activeCat;
        });
        setFiltered(filtered);
      });
  }

  // console.log("filter", filter);

  return (
    <div className="page">
      <Header />
      <Filter
        portfolioList={portfolioList}
        setFiltered={setFiltered}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
      />
      <div className="portfolio-container">
        {filtered.length !== 0
          ? filtered.map(function (item, i) {
              return <PortfolioItem key={item.id} item={item} index={i} />;
            })
          : "No Portfolio Available"}
      </div>
    </div>
  );
}

export default Portfolio;
