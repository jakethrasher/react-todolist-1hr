import React from 'react';

const TodoList = ({todos, handleClick}) => {
  return (
    <ul>
      {todos.map((todo, i)=>(
        <li key={`${todo}-${i}`} onClick={handleClick}>
        {todo}
        </li>
      
    ))}
  </ul>
)
}
        
export default TodoList;