import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1, { replace: true });
        // { replace: true }를 통해 사이트 이동 히스토리 저장 X
        // 결과적으로 현재 있는 곳에서 히스토리를 추적해서 뒤로 가는 것이 아닌,
        // '/'에 해당하는 홈으로 이동하게 됨
    };

    const goArticles = () => {
        navigate('/articles', { replace: true });
    };

    const goHome = () => {
        navigate('/', { replace: true });
    };

    const goMe = () => {
        navigate('/profiles/corder', { replace: true });
    };

    const goTeam = () => {
        navigate('/profiles/team_3', { replace: true });
    };

    return (
        <div>
            <header
                style={{
                    borderBottom: 'solid',
                    borderColor: '#61dafb',
                    paddingBottom: 40,
                    fontSize: 30,
                    marginBottom: 50,
                    color: '#61dafb'
                }}>
                <h1>React Router Study Site</h1>
                <button onClick={goHome}>Go Home</button>
                <button onClick={goBack}>Go Back</button>
                <button onClick={goArticles}>Go Articles List</button>
                <button onClick={goTeam}>About Team 3</button>
                <button onClick={goMe}>About Me</button>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;