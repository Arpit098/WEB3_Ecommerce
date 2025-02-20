import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import CardData from "../components/CardData";
import PopularCollection from "../components/PopularCollection";
import PopularData from "../components/PopularData";
import ProductsContainer from "../components/Product";
import PopularCollection2 from "../components/PopularCollection2";
import Collection from "../components/Collection";
import Herobg from "../components/Herobg";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Herobg/> 
      <ProductsContainer />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
