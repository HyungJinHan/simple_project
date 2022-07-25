import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="main_page">
            <h1>Home</h1>
            <p>This is Main Page</p>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <br />
            <li>
                <Link to='/profiles/corder'>한형진의 프로필</Link>
            </li>
            <br />
            <li>
                <Link to='/profiles/team_3'>3조의 프로필</Link>
            </li>
            <br />
            <li>
                <Link to='/profiles/void'>존재하지 않는 프로필</Link>
            </li>
        </div>
    );
};

export default Home;