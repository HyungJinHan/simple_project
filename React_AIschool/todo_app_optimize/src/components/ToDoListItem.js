import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './ToDoListItem.scss'

const ToDoListItem = ({ todo, onRemove, onToggle, style }) => {
    const { text, checked, id } = todo;

    return (
        <div className='ToDoListItem-virtualized' style={style}>
            <div className='ToDoListItem'>
                <div
                    className={cn('checkbox', { checked })}
                    onClick={() => onToggle(id)}
                >
                    {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
                    <div className='text'>{text}</div>
                </div>
                <div
                    className='remove'
                    onClick={() => onRemove(id)}
                >
                    <MdRemoveCircleOutline />
                </div>
            </div>
        </div>
    );
};

export default React.memo(ToDoListItem);