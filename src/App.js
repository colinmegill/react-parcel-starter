import React from "react";
import WorldviewDemo from "./worldview-example";

const App = () => {
  return (
    <div>
      <p>from App rerender</p>
      <p> now for a worldview demo! </p>

      <div style={{ width: "50vw", height: "50vh" }}>
        <WorldviewDemo />
      </div>
    </div>
  );
};

export default App;
