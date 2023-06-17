import React, { useState } from "react";
import Card from "./Card";

const Cards = ({ courses, category }) => {
  // console.log(courses);
  const [likedCourses, setLikedCourses] = useState([]);

  //It returns a list of all courses received from API response
  const getCourses = () => {
    if (category === "All") {
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    } else {
      //only specific category array will be passed
      return courses[category];
    }
  };
  getCourses();
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        );
      })}
    </div>
  );
};

export default Cards;
