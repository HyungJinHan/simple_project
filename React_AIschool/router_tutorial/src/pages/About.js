import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const About = () => {
    const location = useLocation();

    return (
        <div className="about_page">
            <h1>About</h1>
            <p>This Project is for React Router Test</p>
            <Link to='/'>Go Home</Link>
            <p>쿼리스트링 : {location.search}</p>
        </div>
    );
};

export default About;