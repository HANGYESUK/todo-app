import { useState, useRef, useCallback } from 'react';
import './App.css';
import TodoInsert from './Component/TodoInsert';
import TodoList from './Component/TodoList';
import TodoTemplate from './Component/TodoTemplate';

function App() {
  
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해보기',
      checked: true
    },
    {
      id: 3,
      text: '일정관리앱 만들어 보기',
      checked: false
    }
  ]);

  const nextId = useRef(4);

  
  const onInsert = useCallback((text)=>{
    const todo = {
      id : nextId.current,
      text,
      checked: false
    }
    setTodos([...todos, todo]);
    nextId.current += 1;
  }, [todos]);


  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }, [todos]
  );

  const onToggle = useCallback(
    (id)=>{
      setTodos(
      todos.map((todo)=>({
        ...todo,
         checked: todo.id == id 
                  ? !todo.checked 
                  : todo.checked
      }))
    )}, [todos]
  );

  return (
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
  );
}

export default App;
