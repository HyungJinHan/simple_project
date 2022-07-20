import logo from './logo.svg';
import './App.css';
import ToDoTemplate from './components/ToDoTemplate';
import ToDoInsert from './components/ToDoInsert';
import ToDoList from './components/ToDoList';
import { useCallback, useRef, useState } from 'react';

const App = (props) => {
  const [update, setUpdate] = useState({
    id: props.text
    // pw: props.pw.value,
    // email: props.email.value,
    // email_sel: props.email_sel.value,
    // gender: props.gender.value,
  })

  const [todos, setTodos] = useState([
    // {
    //   id: 1,
    //   text: '할 일을 입력해서 등록해보세요.',
    //   checked: false
    // },
    // {
    //   id: 2,
    //   text: '체크박스를 클릭해서 할 일을 끝내보세요.',
    //   checked: true
    // },
    // {
    //   id: 3,
    //   text: '할 일을 끝냈다면 오른쪽의 아이콘을 눌러 삭제해보세요.',
    //   checked: true
    // }
  ]);

  const nextId = useRef(0);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]);

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter(todo => todo.id !== id));
    }, [todos]);

  // const onToggle = useCallback(
  //   id => {
  //     setTodos(
  //       todos.map(
  //         (todo) =>
  //           todo.id === id ? { ...todo, checked: !todo.checked } : todo,
  //       ),
  //     );
  //   }, [todos])



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
        <ToDoList
          todos={todos}
          onRemove={onRemove}
        // onToggle={onToggle}
        />
      </ToDoTemplate>
      <hr />
    </div>
  );
}

export default App;
