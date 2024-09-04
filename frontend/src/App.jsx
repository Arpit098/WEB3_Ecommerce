// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import HomePage from "../src/pages/Home";
// import ProductDetailsPage from "../src/pages/ProductDetailsPage";
// import products from "../src/components/ProdctDetailsData"; // Importing product data

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={HomePage} />
//         <Route
//           path="/product-details/:productId"
//           render={(props) => {
//             const product = products.find(
//               (p) => p.id === props.match.params.productId
//             );
//             return <ProductDetailsPage product={product} />;
//           }}
//         />
//       </Switch>
//     </Router>
//   );
// };

// export default App;


// App.jsx

import React from "react";

import HomePage from "../src/pages/Home";
import ProductDetailsPage from "../src/pages/ProductDetailsPage";
// import Products from "../src/components/ProdctDetailsData"; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Desktop12 from "./pages/Desktop12";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetailsPage />}
        />
        <Route path="/boredApe" element={<Desktop12 />} />
        <Route path="/boredApe" element={<Desktop12 />} />
      </Routes>
    </Router>
  );
};

export default App;
