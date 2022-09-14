import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [currentCategory, setCategory] = useState('All')
  const [taskList, setTaskList] = useState(TASKS)

  
  console.log('rendering...')
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter currentCategory={currentCategory} setCategory={setCategory} categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} setTaskList={setTaskList} taskList={taskList} />
      <TaskList currentCategory={currentCategory} taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
