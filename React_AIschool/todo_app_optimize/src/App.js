import logo from './logo.svg';
import './App.css';
import ToDoTemplate from './components/ToDoTemplate';
import ToDoInsert from './components/ToDoInsert';
import ToDoList from './components/ToDoList';
import { useCallback, useReducer, useRef, useState } from 'react';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false
    });
  }
  return array;
}

function todoReducer(todos, action) {
  if (action.type === 'INSERT') {
    return todos.concat(action.todo);
  } else if (action.type === 'REMOVE') {
    return todos.filter((todo) => todo.id !== action.id);
  } else if (action.type === 'TOGGLE') {
    return todos.map(
      (todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
    );
  } else {
    return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      dispatch(
        ({ type: 'INSERT', todo })
      );
      nextId.current += 1;
    }, []);

  const onRemove = useCallback(
    (id) => {
      dispatch(
        ({ type: 'REMOVE', id })
      );
    }, []);

  const onToggle = useCallback(
    id => {
      dispatch(
        ({ type: 'TOGGLE', id })
      );
    }, [])

  return (
    <div>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code className="toDo-header">Create To Do List App</code>
          </p>
        </header>
      </div> */}
      <ToDoTemplate>
        <ToDoInsert onInsert={onInsert} />
        <ToDoList
          todos={todos}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      </ToDoTemplate>
    </div>
  );
}

export default App;