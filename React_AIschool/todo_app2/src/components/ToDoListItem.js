import React, { useState } from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
    MdDns
} from 'react-icons/md';
import cn from 'classnames';
import './ToDoListItem.scss'

const ToDoListItem = ({ todo, onRemove, onToggle }) => {
    const { text, id } = todo;

    return (
        <div className='ToDoListItem'>
            <button
                className='update_btn'
                onClick={(e) => {
                }}
            ><MdDns /></button>
            <div
            // className={cn('checkbox', { checked })}
            // onClick={() => onToggle(id)}
            >
                {/* {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} */}

                <div className='text'>{text}</div>
            </div>
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