import React from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();

    return (
        <div className='article_page'>
            <h2>Article {id}</h2>
            This is Article {id}'s Description
            <br /><br />
        </div>
    );
};

export default Article;