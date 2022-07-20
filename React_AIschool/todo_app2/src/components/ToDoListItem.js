import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './ToDoListItem.scss'

const ToDoListItem = ({ todo, onRemove, onToggle }) => {
    const { text, checked, id } = todo;

    return (
        <div className='ToDoListItem'>
            <div
            // className={cn('checkbox', { checked })}
            // onClick={() => onToggle(id)}
            >
                {/* {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} */}

                <div className='text'>{text}</div>
            </div>
            <button
                className='update_btn'
                onClick={(e) => {
                    // setUpdate();
                }}
            >수정</button>
            <div
                className='remove'
                onClick={() => onRemove(id)}
            >
                <MdRemoveCircleOutline />
            </div>
        </div>
    );
};

export default ToDoListItem;