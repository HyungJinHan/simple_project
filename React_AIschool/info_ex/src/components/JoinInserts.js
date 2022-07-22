import { useState, useRef } from "react";

const JoinInserts = ({ onInsert, form, onUpdate }) => {
  // 데이터 수정, 등록 시 사용
  console.log("JoinInserts(form)", form);

  var [value, setValue] = useState({});

  const idRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const formRef = useRef();

  const setFormData = () => {
    if (form.num !== undefined) {
      value.num = form.num;
    }
    value.id = idRef.current.value;
    value.password = passwordRef.current.value;
    value.email = emailRef.current.value;
    value.gender = genderRef.current.checked === true ? "여자" : "남자";
  };

  const onClick = (e) => {
    setFormData();
    if (form.num === undefined) {
      onInsert(value);
      // 값이 채워지지 않은 상태일 시, 등록 역할
    } else {
      onUpdate(value);
      // 값이 채워진 상태일 시, 수정 역할
    }
    setValue({
      num: 0,
      id: "",
      password: "",
      email: "",
      gender: "",
    });
    // 단순 값을 비우는 것이 아닌 빈 값을 입력한 객체를 복사
    formRef.current.reset();
    // form의 value 값을 초기화 시켜서 비우는 역할
    e.preventDefault();
  };

  return (
    <div>
      <form className="JoinInserts" ref={formRef}>
        <table border="1">
          <tbody>
            <tr>
              <td width="110px">아이디</td>
              <td width="440px">
                <input
                  type="text"
                  name="id"
                  defaultValue={form.id !== undefined ? form.id : ""}
                  ref={idRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">비밀번호</td>
              <td width="440px">
                <input
                  type="password"
                  name="password"
                  defaultValue={
                    form.password !== undefined ? form.password : ""
                  }
                  ref={passwordRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">이메일</td>
              <td width="440px">
                <input
                  type="email"
                  name="email"
                  defaultValue={form.email !== undefined ? form.email : ""}
                  ref={emailRef}
                />
              </td>
            </tr>
            <tr>
              <td width="110px">성별</td>
              <td>
                남자
                <input
                  type="radio"
                  value="남자"
                  name="gender"
                  defaultChecked={
                    form.num !== undefined && form.gender === "남자"
                  }
                  ref={genderRef}
                />
                여자
                <input
                  type="radio"
                  value="여자"
                  name="gender"
                  defaultChecked={
                    form.num !== undefined && form.gender === "여자"
                  }
                  ref={genderRef}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" align="center">
                <input
                  type="button"
                  name="btn"
                  value="등록"
                  onClick={onClick}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <div className="app-title">회원 정보</div>
    </div>
  );
};

export default JoinInserts;
