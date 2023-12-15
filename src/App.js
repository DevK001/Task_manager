// App.js

import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (taskId, newTitle) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Task Manager</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="btn btn-primary mt-2"
          onClick={addTask}
          style={{ animation: 'fadeIn 0.5s' }}
        >
          Add Task
        </button>
      </div>
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleCompletion={toggleCompletion}
        editTask={editTask}
      />
    </div>
  );
};

export default App;
