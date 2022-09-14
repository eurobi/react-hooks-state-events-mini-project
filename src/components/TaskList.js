import React from "react";
import Task from "./Task.js"

function TaskList({ currentCategory, taskList, setTaskList }) {
  let filteredTasks = taskList
  if(currentCategory === 'Code' || currentCategory === 'Food' || currentCategory === 'Money' || currentCategory === 'Misc'){
    filteredTasks = taskList.filter((task) => task.category === currentCategory)
  }

  const tasks = filteredTasks.map((task) => <Task className='task' setTaskList={setTaskList} taskList={taskList} category={task.category} text={task.text} key={task.text} />)
  return (
    <div className="tasks">
      {tasks}
    </div>
  );
}

export default TaskList;
