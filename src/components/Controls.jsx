import React from 'react';


const Controls = ({todo, onChangeTodo, onClick}) => {
  return (
    <form>
      <input type='text' value={todo} placeholder='enter a todo' onChange={onChangeTodo}/>
      <button onClick={onClick}>add todo</button>
    </form>
  )
}


export default Controls;