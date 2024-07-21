import React from "react";

function CategoryFilter({ categoryList, selectedCategory, onSelectedCategory }) {
  return (
    <div className="categories">
      {categoryList.map((category, index) => (
        <button key={index} className={category === selectedCategory ? "selected" : ""}
          onClick={() => onSelectedCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;