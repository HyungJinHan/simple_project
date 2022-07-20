import logo from './logo.svg';
import './App.css';
import ToDoTemplate from './components/ToDoTemplate';
import ToDoInsert from './components/ToDoInsert';
import ToDoList from './components/ToDoList';
import { useCallback, useRef, useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 해 보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    }
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]);

  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code className="toDo-header">Create To Do List App</code>
          </p>
        </header>
      </div>
      <ToDoTemplate>
        <ToDoInsert onInsert={onInsert} />
        <ToDoList todos={todos} />
      </ToDoTemplate>
    </div>
  );
}

export default App;
