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
    <div className="filter-container">
      {/* <button
        className={activeCat === "all" ? "filters active" : "filters"}
        onClick={() => setActiveCat("all")}
      >
        All
      </button> */}
      <button
        className={activeCat === "Interactives" ? "filters active" : "filters"}
        onClick={() => setActiveCat("Interactives")}
      >
        Interactives
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
