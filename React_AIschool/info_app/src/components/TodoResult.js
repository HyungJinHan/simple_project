import React from 'react';

const TodoResult = (props) => {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.pw}</p>
            <p>{props.email}</p>
            <p>{props.email_sel}</p>
            <p>{props.gender}</p>
        </div>
    );
};

export default TodoResult;