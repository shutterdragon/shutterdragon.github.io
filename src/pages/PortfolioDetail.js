import Header from "./../components/Header";
import { Link, useParams } from "react-router-dom";
import ninja from "../img/Ninja.png";
import { useEffect, useState } from "react";

function PortfolioDetail() {
  const { portfoliotitle } = useParams();
  const [details, setDetails] = useState([]);

  async function getSelPortDetail() {
    fetch("../data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        console.log("data", portfoliotitle.replace(/\s+/g, " ").toLowerCase());
        // const fd = data.filter(function (obj) {
        //   return obj.title === portfoliotitle;
        // });
        // console.log(fd);
        // setPortfolioList(data);
      });
  }

  useEffect(() => {
    getSelPortDetail();
    return () => {};
  }, []);

  return (
    <div className="page">
      <Header />
      <div className="portfolio-details">Details of {portfoliotitle}</div>
    </div>
  );
}

export default PortfolioDetail;
