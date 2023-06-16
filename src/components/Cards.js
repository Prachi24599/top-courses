import React from "react";
import Card from "./Card";

const Cards = ({ courses }) => {
  // console.log(courses);

  //It returns a list of all courses received from API response
  const getCourses = () => {
    let allCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course);
      });
    });
    return allCourses;
  };
  getCourses();
  return (
    <div>
      {getCourses().map((course) => {
        return <Card key={course.id} course={course} />;
      })}
    </div>
  );
};

export default Cards;
