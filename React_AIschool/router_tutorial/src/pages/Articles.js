import React from 'react';
import { Outlet } from 'react-router-dom';
import ArticleItem from './ArticleItem';

const Articles = () => {
    return (
        <div className='articles_page'>
            <Outlet />
            <ArticleItem id={1} />
            <ArticleItem id={2} />
            <ArticleItem id={3} />
        </div>
    );
};


export default Articles;