import React from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Filter filterData={filterData}></Filter>
      <Cards></Cards>
    </div>
  );
};

export default App;
