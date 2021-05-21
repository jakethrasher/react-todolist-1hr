import React,{useState} from 'react';
import Controls from './Controls';
import TodoList from './TodoList';

const TodoListContainer = () => {
  const [todo, setTodo] = useState('')
  const [todosArray, setTodosArray] = useState([])

  const handleClick = (e) =>{
    e.preventDefault();
    setTodosArray(prevState=>[...prevState, todo])
  }
  return(
    <>
      <Controls todo={todo} onChangeTodo={({target})=>setTodo(target.value)} onClick={handleClick}/>
      <TodoList todos={todosArray}/>
    </>
  )
}

export default TodoListContainer;