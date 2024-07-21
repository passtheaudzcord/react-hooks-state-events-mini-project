import React from "react";

import Task from "./Task";

function TaskList({ tasks, selectedCategory, onDeleteTask }) {

  const filteredTasks = selectedCategory === "All"
    ? tasks
    : tasks.filter(task => task.category === selectedCategory);

  return (
    <div className="tasks">
      {filteredTasks.map((task, id) => (
        <Task 
          task={task} 
          key={id} 
          onDelete={() => onDeleteTask(task)} 
        />
      ))}
    </div>
  );
}

export default TaskList;