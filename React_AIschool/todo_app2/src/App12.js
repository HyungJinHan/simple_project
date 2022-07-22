import logo from './logo.svg';
import './App.css';
import ToDoTemplate from './components/ToDoTemplate';
import ToDoInsert from './components/ToDoInsert';
import ToDoList from './components/ToDoList';
import { useCallback, useRef, useState } from 'react';
import { MdDns } from 'react-icons/md';

const App = (props) => {
  const [todos, setTodos] = useState([

  ]);

  const Update = (props) => {
    const [id, setId] = useState(props.id);
    const [pw, setPw] = useState(props.pw);
    const [email, setEmail] = useState(props.email);
    const [email_sel, setEmail_sel] = useState(props.email_sel);
    const [gender, setGender] = useState(props.gender);

    return (
      <form
        className='ToDoInsert'
        onSubmit={(e) => {
          e.preventDefault();
          const id = e.target.id.value;
          const pw = e.target.pw.value;
          const email = e.target.email.value;
          const email_sel = e.target.email_sel.value;
          const gender = e.target.gender.value;
          props.onUpdate(id, pw, email, email_sel, gender);
        }}
      >
        <table>
          <tbody>
            <tr>
              <th width="200px" height="30px">아이디</th>
              <td width="500px">
                <input
                  type="text"
                  width="400"
                  name="id"
                  placeholder="6 ~ 10, 숫자와 알파벳만 사용"
                  minLength="6"
                  maxLength="10"
                  size="30"
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  value={id}
                  required autoComplete="off"
                />
              </td>
            </tr>
            <tr>
              <th width="150px" height="30px">비밀번호</th>
              <td>
                <input
                  type="password"
                  width="400"
                  name="pw"
                  placeholder="6 ~ 10, 숫자와 알파벳만 사용"
                  minLength="6"
                  maxLength="10"
                  size="30"
                  onChange={(e) => {
                    setPw(e.target.value);
                  }}
                  value={pw}
                  required autoComplete="off"
                />
              </td>
            </tr>
            <tr>
              <th width="150px" height="30px">이메일</th>
              <td>
                <input
                  className='email'
                  placeholder='이메일을 입력하세요.'
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
                &nbsp;@&nbsp;
                <select
                  className='email_sel'
                  name='email_sel'
                  onChange={(e) => {
                    setEmail_sel(e.target.value);
                  }}
                  value={email_sel}
                >
                  <option value="">메일주소선택</option>
                  <option value="hanmail.net">hanmail.net</option>
                  <option value="naver.com">naver.com</option>
                  <option value="nate.com">nate.com</option>
                </select>
              </td>
            </tr>
            <tr>
              <th width="150px" height="30px">성별</th>
              <td className='genders'>
                <select
                  className='gender'
                  name='gender'
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                >
                  <option value="">성별 선택</option>
                  <option value="남자">남자</option>
                  <option value="여자">여자</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <button
          // className='update_btn'
          onClick={(e) => {
          }}
        ><MdDns />
        </button>
      </form>
    )
  }

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

  // const onToggle = useCallback(
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
