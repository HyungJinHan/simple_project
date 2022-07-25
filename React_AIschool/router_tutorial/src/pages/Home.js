import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const activeStyle = {
        color: '#61dafb',
        fontWeight: 'bolder'
    }

    const passiveStyle = {
        color: 'white',
        textDecoration: 'none'
    }

    return (
        <div className="main_page">
            <h1>Home</h1>
            <p>This is Main Page</p>
            <li>
                <NavLink
                    to='/about'
                    style={({ isActive }) => (isActive ? activeStyle : passiveStyle)}
                >
                    About
                </NavLink>
            </li>
            <br />
            <li>
                <NavLink
                    to='/profiles/corder'
                    style={({ isActive }) => (isActive ? activeStyle : passiveStyle)}
                >
                    한형진의 프로필
                </NavLink>
            </li>
            <br />
            <li>
                <NavLink
                    to='/profiles/team_3'
                    style={({ isActive }) => (isActive ? activeStyle : passiveStyle)}
                >
                    3조의 프로필
                </NavLink>
            </li>
            <br />
            <li>
                <NavLink
                    to='/profiles/void'
                    style={({ isActive }) => (isActive ? activeStyle : passiveStyle)}
                >
                    존재하지 않는 프로필
                </NavLink>
            </li>
            <br />
            <li>
                <NavLink
                    to='/articles'
                    style={({ isActive }) => (isActive ? activeStyle : passiveStyle)}
                >
                    Articles List
                </NavLink>
            </li>
        </div>
    );
};

export default Home;