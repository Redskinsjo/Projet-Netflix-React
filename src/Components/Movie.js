import React from "react";

const Movie = ({ url, key }) => {
  return (
    <>
      <img src={url} alt={key}></img>
    </>
  );
};

export default Movie;
