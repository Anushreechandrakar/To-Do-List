import React, { useState } from 'react';
import './Form.css';

const Todo = () => {
  const [inputData, setInputData] = useState('annu');
  const [items, setItems] = useState([]);

  const addTodo = () => {
    if (inputData.trim() !== '') {
      setItems([...items, inputData.trim()]);
      setInputData('');
    }
  };

  const deleteTodo = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="todo-container">
      <div className="todo-form">
        <input
          type="text"
          placeholder="Add Todo"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="todo-list">
        {items.map((todo,index) => (
          <div className="todo-item" key={index}>
        <input
          type="text"
          placeholder="Add Todo"
          value={todo}
          onChange={(e) => setInputData(e.target.value)}
        />
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
