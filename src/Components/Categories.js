import React from "react";
import Category from "./Category";

const Categories = ({ data }) => {
  const renderCategories = data.map((elem) => {
    return (
      <Category
        key={"category" + 1}
        category={elem.category}
        images={elem.images}
      />
    );
  });
  return <>{renderCategories}</>;
};

export default Categories;
