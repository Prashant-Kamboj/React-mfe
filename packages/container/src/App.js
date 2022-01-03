import React from "react";
import MarketingComponent from "./components/MarketingComponent";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});
export default function App() {
  console.log("hello from container");
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingComponent />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
}
