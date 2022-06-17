import { useEffect } from "react";

function Filter({ portfolioList, setFiltered, activeCat, setActiveCat }) {
  useEffect(() => {
    // if (activeCat === "all") {
    //   setFiltered(portfolioList);
    //   return;
    // }

    const filtered = portfolioList.filter((item) => {
      return item.category === activeCat;
    });

    setFiltered(filtered);
  }, [activeCat]);
  return (
    <div className="portfolio-container filter-container">
      {/* <button
        className={activeCat === "all" ? "filters active" : "filters"}
        onClick={() => setActiveCat("all")}
      >
        All
      </button> */}
      <button
        className={activeCat === "UI/UX" ? "filters active" : "filters"}
        onClick={() => setActiveCat("UI/UX")}
      >
        UI/UX
      </button>
      <button
        className={activeCat === "Illustration" ? "filters active" : "filters"}
        onClick={() => setActiveCat("Illustration")}
      >
        Illustration
      </button>
      <button
        className={activeCat === "Misc" ? "filters active" : "filters"}
        onClick={() => setActiveCat("Misc")}
      >
        Misc
      </button>
    </div>
  );
}

export default Filter;
