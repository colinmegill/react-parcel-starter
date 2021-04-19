import React from "react";
import { useFetch } from "./hooks/useFetch";

// https://observablehq.com/@jermspeaks/async-await

const App = () => {
  const [data, loading] = useFetch(
    "https://raw.githubusercontent.com/colinmegill/react-parcel-starter/main/weather.csv"
  );

  console.log("from hook", loading, data);
  return (
    <div>
      <h1>Exploratory Data Analysis, Assignment 2, INFO 474 SP 2021</h1>
      <p>{loading && "Loading data!"}</p>
    </div>
  );
};

export default App;
