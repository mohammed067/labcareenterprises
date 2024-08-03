import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../public/fonts/monto/stylesheet.css";
import Nav from "./sections/home/nav.jsx";
import { BrowserRouter } from "react-router-dom";
import Empty from "./components/empty.jsx";
import Footer from "./components/footer.jsx";
import MaintenancePage from "./components/MaintenancePage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <BrowserRouter>

      <Nav />
      <App />
      <div>
         <Empty/>
         <Footer/>
      </div>
    </BrowserRouter> */}
    <MaintenancePage/>
  </React.StrictMode>
);
