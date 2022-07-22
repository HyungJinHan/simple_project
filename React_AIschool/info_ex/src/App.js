import { useState } from "react";
import { useRef, useCallback } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import JoinInserts from "./components/JoinInserts";
import JoinList from "./components/JoinList";

function App() {
  const [joins, setJoins] = useState([]);
  const [form, setForm] = useState({});

  // ref를 사용하여 변수 담기
  const nextNum = useRef(0);

  const onInsert = useCallback(
    (value) => {
      value.num = nextNum.current;
      setJoins(joins.concat(value));
      nextNum.current += 1;
      // setForm({});
    },
    [joins]
  );

  const onUpdateForm = useCallback(
    (idx) => {
      setForm(joins[idx]);
    },
    [joins]
  );

  const onUpdate = useCallback(
    (updateJoin) => {
      setJoins(
        joins.map((data) => (data.num === updateJoin.num ? updateJoin : data))
        // map : 배열을 반환
      );
      setForm({});
    },
    [joins]
    // map의 배열을 반환하는 특성으로 인해 배열 형태로 작성
  );

  const onRemove = useCallback(
    (num) => {
      setJoins(joins.filter((join) => join.num !== num));
    },
    [joins]
  );

  return (
    <TodoTemplate>
      <JoinInserts
        onInsert={onInsert}
        form={form}
        onUpdate={onUpdate}
      ></JoinInserts>
      <JoinList
        joins={joins}
        onRemove={onRemove}
        onUpdateForm={onUpdateForm}
      ></JoinList>
    </TodoTemplate>
  );
}

export default App;
