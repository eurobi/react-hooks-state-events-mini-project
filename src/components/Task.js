import React from "react";

function Task( { setTaskList, taskList, category, text } ) {
  function onRemoveTaskClick(event){
    const newTaskList = [...taskList].filter((task) => task.text !== event.target.id)
    setTaskList(newTaskList)

  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button id={text} onClick={onRemoveTaskClick} className="delete">X</button>
    </div>
  );
}

export default Task;
