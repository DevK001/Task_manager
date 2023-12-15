// Task.js

import React, { useState } from 'react';

const Task = ({ task, deleteTask, toggleCompletion, editTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEdit = () => {
    editTask(task.id, editedTitle);
    setEditing(false);
  };

  return (
    <div className={`task mb-2 ${task.completed ? 'completed' : ''}`}>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={() => toggleCompletion(task.id)}
        />
        {isEditing ? (
          <>
            <input
              type="text"
              className="form-control"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
            <button
              className="btn btn-success btn-sm ms-2"
              onClick={handleEdit}
            >
              Save
            </button>
          </>
        ) : (
          <>
            <label className="form-check-label flex-grow-1">
              <span
                onClick={() => setEditing(true)}
                style={{ cursor: 'pointer' }}
              >
                {task.title}
              </span>
            </label>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Task;
