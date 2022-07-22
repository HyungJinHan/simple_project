import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './ToDoInsert.scss';

const ToDoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(
        (e) => {
            setValue(e.target.value);
        }, []);

    const onSubmit = useCallback(
        (e) => {
            onInsert(value);
            setValue('');
            e.preventDefault();
            // submit을 클릭할 시 새로고침 방지
        }, [onInsert, value]);

    return (
        <form
            className='ToDoInsert'
            onSubmit={onSubmit}
        >
            <input
                placeholder='할 일을 입력하세요.'
                value={value}
                onChange={onChange}
            />
            <button
            >
                <MdAdd />
            </button>
        </form>
    );
};

export default ToDoInsert;