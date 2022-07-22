// import logo from './logo.svg';
import './App.css';
import { useRef, useCallback, useState } from 'react';
import produce from 'immer';

function App() {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: '' });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      // setForm({
      //   ...form,
      //   [name]: [value]
      // });
      // // 수동으로 복제하고 값을 대입하는 작업

      setForm(
        produce((draft) => {
          // draft 함수 자체를 파라미터 값으로 전달
          draft[name] = value;
        })
      );
      // produce 함수를 통해 복제하고 대입하는 작업

    }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // setData({
      //   ...data,
      //   array: data.array.concat(info)
      // });
      // // 수동으로 복제하고 값을 대입하는 작업

      setData(
        produce((draft) => {
          // draft 함수 자체를 파라미터 값으로 전달
          draft.array.push(info);
        })
      );
      // produce 함수를 통해 복제하고 대입하는 작업

      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    }, [form.name, form.username]);

  const onRemove = useCallback(
    (id) => {
      // setData({
      //   ...data,
      //   array: data.array.filter((info) => info.id !== id)
      // });
      // // 수동으로 복제하고 값을 대입하는 작업

      setData(
        produce((draft) => {
          // draft 함수 자체를 파라미터 값으로 전달
          draft.array.splice(draft.array.findIndex(
            (info) => info.id === id),
            1
          );
        })
      );
      // produce 함수를 통해 복제하고 대입하는 작업
    },
    []
  );

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input
          name='username'
          placeholder='아이디'
          value={form.username}
          onChange={onChange}
        />
        <input
          name='name'
          placeholder='이름'
          value={form.name}
          onChange={onChange}
        />
        <button type='submit'>
          등록
        </button>
      </form>
      <div>
        {data.array.map((info) => (
          <li
            key={info.id}
            onClick={() => onRemove(info.id)}
          >
            {info.username} ({info.name})
          </li>
        ))}
      </div>
    </div>
  );
}

export default App;
