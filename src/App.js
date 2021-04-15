import React from "react";
import WorldviewDemo from "./worldview-example";
import { csv } from "d3-fetch";

const App = () => {
  csv(
    "https://raw.githubusercontent.com/colinmegill/react-parcel-starter/main/weather.csv"
  ).then((data) => console.log(data));
  return (
    <div>
      <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
      <p>Data!</p>
    </div>
  );
};

export default App;
