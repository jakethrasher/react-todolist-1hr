import React from 'react';

const TodoList = ({todos}) => {
  return (
    <ul>
      {todos.map((todo, i)=>(
        
          <li key={`${todo}-${i}`}>
          {todo}
          <button>delete</button>
          </li>
        
      ))}
    </ul>
  )
}

export default TodoList;