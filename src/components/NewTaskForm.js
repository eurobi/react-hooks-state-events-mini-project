import React, { useState } from "react";

function NewTaskForm({  categories, setTaskList, taskList }) {
  const [details, setDetails] = useState('')
  function onDetailsChange(event){
    setDetails(event.target.value)
  }
  const [selectedCategory, setSelectedCategory] = useState('Code')

  function onSetSelectedCategory(event){
    setSelectedCategory(event.target.value)
  }

  function onTaskFormSubmit(event){
    event.preventDefault()
    setDetails('')
    const newTask = {
      text: details,
      category: selectedCategory
    }
    if(taskList){
      const newTaskList = [...taskList, newTask]
      console.log(newTaskList)
      setTaskList(newTaskList)}
    
  }

  const categoryOptions = categories.map((category) => <option key={category}>{category}</option>)
  return (
    <form onSubmit={onTaskFormSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={onDetailsChange} value={details} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={onSetSelectedCategory} value={selectedCategory} name="category">
          {categoryOptions.filter((cat) => cat.key !== 'All')}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
