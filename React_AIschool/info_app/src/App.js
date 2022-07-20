// import logo from './logo.svg';
import { useCallback, useRef, useState } from 'react';
import './App.css';
import TodoBasic from './components/TodoBasic';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([

  ]);

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos])

  const nextId = useRef();

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]);

  return (
    <div className="App">
      <TodoBasic>
        <TodoInsert onInsert={onInsert} />
        <br /><hr />
        <TodoList
          todos={todos}
          onRemove={onRemove}
        />
      </TodoBasic>
    </div>
  );
}

export default App;
