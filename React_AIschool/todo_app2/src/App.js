import logo from './logo.svg';
import './App.css';
import ToDoTemplate from './components/ToDoTemplate';
import ToDoInsert from './components/ToDoInsert';
import ToDoList from './components/ToDoList';
import { useCallback, useRef, useState } from 'react';
import { MdDns } from 'react-icons/md';

const App = (props) => {
  const [todos, setTodos] = useState([]);

  const nextId = useRef(0);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        // checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]);

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]);

  // const onUpdate = useCallback(
  //   id => {
  //     setTodos(
  //       todos.map(
  //         (todo) =>
  //           todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //       ),
  //     );
  //   }, [todos])

  // const onUpdate = useCallback(
  //   setTodos()
  // )

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
        <br />
        <hr />
        <ToDoList
          todos={todos}
          onRemove={onRemove}
        // onToggle={onToggle}
        />
      </ToDoTemplate>
    </div>
  );
}

export default App;
