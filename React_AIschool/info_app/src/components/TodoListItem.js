import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';
// import TodoUpdate from './TodoUpdate';

const TodoListItem = ({ todo, onRemove }) => {
    const { id, text, checked } = todo;

    return (
        <div className='TodoListItem'>
            <div className={cn('Checkbox', { checked })}>
                {/* {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} */}
                <button>수정</button>
                <div className='text'>{text}</div>
                {/* <TodoUpdate /> */}
            </div>
            <div className='remove' onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline />
            </div>
        </div >
    );
};

export default TodoListItem;