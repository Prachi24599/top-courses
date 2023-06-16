import React from "react";

const Card = ({ course }) => {
  return (
    <div>
      <div>
        <img src="{course.image.url}" alt="img"></img>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
