import React from 'react';
import { useParams } from 'react-router-dom';

const data = {
    corder: {
        name: '한형진',
        desc: [
            '리액트를 사용하는 개발자'
            , <br />, <br />,
            '리액트 예제 To Do List부터 헤매기 시작'
            , <br />, <br />
        ]
    },
    team_3: {
        name: '3조',
        desc: [
            '리액트 프로젝트 개발팀'
            , <br />, <br />,
            '팀 프로젝트 시작은 8월 중순'
            , <br />, <br />
        ]
    }
};

const Profile = (id) => {
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
        </div>
    );
};

export default Profile;