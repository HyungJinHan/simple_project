import React from 'react';
import { useState, useMemo, useCallback, useRef } from 'react';

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

    const inputEl = useRef(null);

    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);
    // 컴포넌트가 처음 렌더링될 때만 함수 생성 후 재사용

    const onInsert = useCallback(() => {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber('');
        inputEl.current.focus();
        // console.log('평균값 계산 중...');
    }, [number, list]);
    // number 혹은 list가 바뀌었을 때만 함수 생성

    const onKeyEnter = (e) => {
        if (e.key === 'Enter') {
            onInsert();
        }
    };

    const avg = useMemo(() => getAverage(list), [list]);
    // 파라미터 값을 설정해서 원하는 값만을 호출

    return (
        <div className='average'>
            평균값 구하기
            <br /><br />
            <input
                value={number}
                onChange={onChange}
                onKeyPress={onKeyEnter}
                ref={inputEl}
            />
            <button onClick={onInsert}>등록</button>
            {list.map((value, index) => (
                <li key={index}>{value}</li>
            ))}
            {/* <li key={index}>{value}</li>를 map 함수로 자동 반복 실행 */}
            <div>
                <b>평균값 : </b> {avg}
            </div>
        </div>
    );
};

export default Average;