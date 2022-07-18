import React from 'react';

const Iteraction = () => {
    const names = ['Snowman', 'Ice', 'Snow', 'Wind'];
    const nameList = names.map((name, index) => <li key={index}>{name}</li>);
    // 콜백함수의 파라미터에 인덱스 값을 지정하고 key 값을 인덱스 값으로 지정

    return (
        <div>
            {nameList}
        </div>
    );
}

export default Iteraction;