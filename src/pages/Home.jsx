import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import Banner from "../images/banner.jpg";
import "../styles/HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Swadham Bhog</h1>
          <p>No.1 Food In India</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;