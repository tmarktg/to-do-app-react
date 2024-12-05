import React from 'react';

function Task({ task, toggleCompletion, deleteTask }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={toggleCompletion}>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>
    </li>
  );
}

export default Task;
