import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    //we need to show loader until we get data
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      //Save output into a variable
      console.log(output);
      setCourses(output.data);
    } catch (error) {
      toast.error(error);
    }
    //hide loader once we get response
    setLoading(false);
  };

  //Need to execute it first time when component is rendered, so dependency list is empty
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter filterData={filterData}></Filter>
      </div>
      <div>
        {setLoading ? <Spinner></Spinner> : <Cards courses={courses}></Cards>}
      </div>
    </div>
  );
};

export default App;
