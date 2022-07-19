import React from 'react';
import { useState } from 'react';

const Average = () => {
    const getAverage = numbers => {
        console.log('평균값 계산 중...');
        if (numbers.length === 0) {
            return 0;
        };
        const sum = numbers.reduce((a, b) => a + b);
        return sum / numbers.length;
    };

    const [list, setList] = useState([]);
    const [number, setNumber] = useState('');

    const onChange = e => {
        setNumber(e.target.value);
    };

    const onInsert = e => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
    };

    return (
        <div className='average'>
            <input value={number} onChange={onChange} />
            <button onClick={onInsert}>등록</button>
            {list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
            <div>
                <b>평균값 : </b> {getAverage(list)}
            </div>
        </div>
    );
};

export default Average;