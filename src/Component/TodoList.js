import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem';

function TodoList({ todos, onRemove, onToggle }) {

  return (
    <div className='TodoList'>
        {
            todos.map((item, a)=>{
                return(
                    <TodoListItem todo={item} key={a} onRemove={onRemove} onToggle={onToggle}/>   
                )    
            })
        }
    </div>
  )
}

export default TodoList