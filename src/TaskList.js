// TaskList.js

import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, toggleCompletion, editTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
          editTask={editTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
