import Header from "./../components/Header";
import { Link, useParams, useHistory } from "react-router-dom";
import ninja from "../img/Ninja.png";
import { useEffect, useState } from "react";

function PortfolioDetail() {
  const history = useHistory();
  const { portfoliotitle } = useParams();
  const [details, setDetails] = useState({});

  const { title, publication, description } = details;

  function formatTitle(str) {
    return str.replace("-", " ");
  }

  async function getSelPortDetail() {
    fetch("../data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        // console.log("data", formatTitle(portfoliotitle));
        const fd = data.filter(function (obj) {
          return obj.url === portfoliotitle;
        });
        console.log(fd[0]);
        setDetails(fd[0]);
      });
  }

  useEffect(() => {
    getSelPortDetail();
    return () => {};
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="container">
        <button className="goBack" onClick={() => history.push("/portfolio")}>
          Go Back
        </button>
        <div className="portfolio-details animate__animated animate__fadeIn">
          <img className="leadimg" src="../img/thumbnail.jpeg" alt={title} />
          <div className="portfolio-txt">
            <h2>{title}</h2>
            <p>{description}</p>
            <div className="portfolio-links">
              <Link to="#">Interactive</Link>
              <Link to="#">Other</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetail;
