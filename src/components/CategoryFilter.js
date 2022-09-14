import React from "react";

function CategoryFilter({ currentCategory, setCategory, categories }) {

  function onCatButtonClick(event){
    setCategory(event.target.value)
  }

  const catButtons = categories.map((category) => {
    if(category === currentCategory){
      return <button className="selected" value={category} onClick={onCatButtonClick} key={category}>{category}</button>
    }
    else{
      return <button value={category} onClick={onCatButtonClick} key={category}>{category}</button>
    }

  });
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
