import React from "react";

import HomePage from "../src/pages/Home";
import ProductDetailsPage from "../src/pages/ProductDetailsPage";
// import Products from "../src/components/ProdctDetailsData"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Desktop12 from "./pages/Desktop12";
import Desktop2 from "./pages/Desktop2";
import Desktop11 from "./pages/Desktop11";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop2 />} />
        <Route path="/desktop12" element={<HomePage />} />
        <Route path="/desktop11" element={<Desktop11 />} />

        <Route
          path="/product-details/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/boredApe" element={<Desktop12 />} />
      </Routes>
    </Router>
  );
};

export default App;
