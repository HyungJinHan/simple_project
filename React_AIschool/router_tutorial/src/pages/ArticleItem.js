import React from 'react';
import { NavLink } from 'react-router-dom';

const ArticleItem = ({ id }) => {
    const activeStyle = {
        color: '#61dafb',
        fontWeight: 'bolder'
    };

    const passiveStyle = {
        color: 'white',
        textDecoration: 'none'
    };

    return (
        <li>
            <NavLink
                to={`/articles/${id}`}
                style={({ isActive }) => (isActive ? activeStyle : passiveStyle)}
            >
                Article {id}
            </NavLink>
            <br /><br />
        </li>
    );
};

export default ArticleItem;