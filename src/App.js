import React from "react";
import Navbar from "/components/Navbar";
import Filter from "./components/Filter";
import Cards from "./componentsCards";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Filter></Filter>
      <Cards></Cards>
    </div>
  );
};

export default App;
