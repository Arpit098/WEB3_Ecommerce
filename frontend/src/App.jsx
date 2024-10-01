import HomePage from "../src/pages/Home";
import ProductDetailsPage from "../src/pages/ProductDetailsPage";
// import Products from "../src/components/ProdctDetailsData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Desktop12 from "./pages/Desktop12";
import Desktop2 from "./pages/Desktop2";
import Desktop11 from "./pages/Desktop11";
import Desktop9 from "./pages/Desktop9";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Desktop2 />} />
        <Route path="/desktop12" element={<HomePage />} />
        <Route path="/desktop11" element={<Desktop11 />} /> */ done
        <Route path="/start-listing" element={<Desktop9 />} /> */ done
        <Route
          path="/product-details/:productId"
          element={<ProductDetailsPage />}
        />{" "}
        */ done
        <Route path="/boredApe" element={<Desktop12 />} /> */ done
      </Routes>
    </Router>
  );
};

export default App;

