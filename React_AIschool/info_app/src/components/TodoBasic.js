import React from 'react';
import './TodoBasic.scss';

const TodoBasic = ({ children }) => {
    return (
        <div className='TodoBasic'>
            <div className='basic_title'>회원 관리</div>
            <div className='basic_content'>{children}</div>
        </div>
    );
};

export default TodoBasic;