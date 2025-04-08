import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ContractProvider } from "./Context/ContractContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ContractProvider>
        <App />
      </ContractProvider>
    </Provider>
  </StrictMode>
);
