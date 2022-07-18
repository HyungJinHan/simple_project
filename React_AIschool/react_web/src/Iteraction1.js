import React from 'react';
import { useState } from 'react';

const Iteraction1 = () => {
    const [names, setNames] = useState([
        { id: 1, text: 'Snowman' },
        { id: 2, text: 'Ice' },
        { id: 3, text: 'Snow' },
        { id: 4, text: 'Wind' }
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    // 새로운 항목을 추가할 때 사용할 id 값

    const onChange = e => setInputText(e.target.value);

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1); // nextId 값에 1을 더함
        setNames(nextNames); // names 값을 업데이트
        setInputText(''); // inputText를 비움
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const nameList = names.map(name =>
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
            {/* 텍스트를 더블 클릭 시, 해당 리스트 삭제*/}
        </li>
    );
    // 콜백함수의 파라미터에 인덱스 값을 지정하고 key 값을 인덱스 값으로 지정

    return (
        <div className='Iteraction'>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>Add List</button>
            {nameList}
        </div>
    );
};

export default Iteraction1;