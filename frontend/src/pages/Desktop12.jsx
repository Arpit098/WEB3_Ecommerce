import React, { useState } from "react";
import BackD12 from "../components/BackD12";
import Navbar from "../components/Navbar";
import Desktop12Products from "../components/Desktop12Products";
import Card from "../components/Card";
import CardData from "../components/CardData";
import Footer from "../components/Footer";
import SummaryBar from "../components/SummaryBar";
import FilterSearchBar from "../components/FilterBar";

const Desktop12 = () => {
  const [view, setView] = useState("grid"); // Manage the view state

  return (
    <div>
      {/* <Navbar /> */}
      <BackD12 />
      <SummaryBar />
      <FilterSearchBar setView={setView} />{" "}
      {/* Pass setView to FilterSearchBar */}
      <Desktop12Products view={view} />{" "}
      {/* Pass the current view to Desktop12Products */}
      <Card details={CardData} />
      <Footer />
    </div>
  );
};

export default Desktop12;
