import React from "react";
import "./App.css";
import Logo from "./assets/img/logo.png";
import Categories from "./Components/Categories";
import data from "./assets/data.json";

function App() {
  return (
    <div className="container">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <Categories data={data} />
    </div>
  );
}

export default App;
