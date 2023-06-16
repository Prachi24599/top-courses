import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spinner from "./components/Spinner";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  // const [courses, setCourses] = useState([]); //read bottom comment

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    //we need to show loader until we get data
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();
      //Save output into a variable
      // console.log(output);
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
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Filter filterData={filterData}></Filter>
      </div>
      <div>{loading ? <Spinner /> : <Cards courses={courses} />}</div>
    </div>
  );
};

export default App;

/**
 * If we dont add spinner and directly just pust cards component then the code breaks with error -
 * "can not convert undefined or null to object"
 * This is becuase we are using api call to fetch the data and until the data is being fetched, the
 * value of courses is set to null and we calling Object.values... on null so we are getting the error
 * If we put [] empty array instead of null then error can resolved.
 * Better is we are adding loader on screen until we get data
 */
