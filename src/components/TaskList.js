import React from 'react';
import Task from './Task';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          toggleCompletion={() => toggleTaskCompletion(index)}
          deleteTask={() => deleteTask(index)}
        />
      ))}
    </ul>
  );
}

export default TaskList;
