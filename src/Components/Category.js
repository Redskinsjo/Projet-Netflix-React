import React from "react";
import "./category.css";

const Component = ({ category, images }) => {
  const movies = images.map((image, index) => {
    return <img src={image} alt={"image" + index} />;
  });
  return (
    <div className="category">
      <h2>{category}</h2>
      <div className="carroussel">{movies}</div>
    </div>
  );
};

export default Component;
