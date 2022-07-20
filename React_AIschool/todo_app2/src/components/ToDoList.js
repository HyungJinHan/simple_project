import React from 'react';
import ToDoListItem from './ToDoListItem';
import './ToDoList.scss'

const ToDoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className='ToDoList'>
            {todos.map(todo => (
                <ToDoListItem
                    todo={todo}
                    key={todo.id}
                    onRemove={onRemove}
                // onToggle={onToggle}
                />
            ))}
            {/* 배열의 개수만큼 반복 (map) */}
            <br /><br />
            <hr />
        </div>
    );
};

export default ToDoList;