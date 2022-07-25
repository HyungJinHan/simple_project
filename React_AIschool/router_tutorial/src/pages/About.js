import React from 'react';
import { useSearchParams } from 'react-router-dom';

const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    // 배열 사용을 위해 [] 사용
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        setSearchParams({
            mode,
            detail: detail === 'true' ? false : true
        });
    };

    const onIncreaseMode = () => {
        const nextMode = mode === 'null' ? 1 : parseInt(mode) + 1;
        setSearchParams({
            mode: nextMode,
            detail
        });
    };

    const onDecreaseMode = () => {
        const nextMode = mode === 'null' ? -1 : parseInt(mode) - 1;
        setSearchParams({
            mode: nextMode,
            detail
        });
    };

    return (
        <div className="about_page">
            <h1>About</h1>
            <p>This Project is for React Router Test</p>
            <p>Detail : {detail}</p>
            <p>Mode : {mode}</p>
            <button onClick={onToggleDetail}>Toggle Detail</button>
            <button onClick={onIncreaseMode}>Mode + 1</button>
            <button onClick={onDecreaseMode}>Mode - 1</button>
        </div>
    );
};

export default About;