import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Cards from "./Cards.jsx";
import MyButton from "./MyButton.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Cards />
    <div className="Final">
      <MyButton />
    </div>
  </React.StrictMode>
);
