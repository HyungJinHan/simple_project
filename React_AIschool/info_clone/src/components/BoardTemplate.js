import React from 'react';
import './BoardTemplate.scss';

const BoardTemplate = ({ children }) => {
    return (
        <div className='BoardTemplate'>
            <div className='app-title'>
                <h1>커뮤니티 게시판</h1>
            </div>
            <div className='content'>{children}</div>
        </div>
    );
};

export default BoardTemplate;