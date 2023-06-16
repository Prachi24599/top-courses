import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);

  //Need to execute it first time when component is rendered, so dependency list is empty
  useEffect(() => {
    // console.log(apiUrl);
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        //Save output into a variable
        console.log(output);
        setCourses(output.data);
      } catch (error) {
        toast.error(error);
      }
    };

    //Calling the function
    fetchData();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <Filter filterData={filterData}></Filter>
      <Cards courses={courses}></Cards>
    </div>
  );
};

export default App;
