import React from 'react';
import { Link, useParams } from 'react-router-dom';

const data = {
    corder: {
        name: '한형진',
        desc: '리액트를 사용하는 개발자'
    },
    team_3: {
        name: '3조',
        desc: '리액트 프로젝트 개발팀'
    }
};

const Profile = () => {
    const params = useParams();
    const profile = data[params.username];

    return (
        <div className="profile_page">
            <h1>User Profile</h1>
            {profile ? (
                // 프로필이 존재한다면?
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.desc}</p>
                </div>
                // 위의 내용을 출력
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
                // 프로필이 존재하지 않으면 위의 내용 출력
            )}
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default Profile;