import React, { useState } from 'react';

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      addTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='task-input'>
      <input
        type='text'
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder='Add a new task...'
      />
      <button type='submit'>Add</button>
    </form>
  );
}

export default TaskInput;
