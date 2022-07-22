import React from 'react';
import ToDoListItem from './ToDoListItem';
import './ToDoList.scss'

const ToDoList = ({ todos, onRemove, onUpdate }) => {
    return (
        <div className='ToDoList'>
            {todos.map(todo => (
                <ToDoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />
            ))}
            {/* 배열의 개수만큼 반복 (map) */}
        </div>
    );
};

export default ToDoList;