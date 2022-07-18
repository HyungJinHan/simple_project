import { useState } from 'react';

const Say = () => {

    const [message, setMessage] = useState('What?');
    // setMessage는 message 값을 변경하도록 함
    // message는 초기 값으로 지정되서 useState에 저장
    // onClick과 같은 이벤트 발생 시, 변경할 값인 setMessage가 저장되며 값이 변경됨
    const onClickEnter = () => setMessage('Hello, World!');
    // 여기서 화살표 함수는 setMessage 메소드를 호출하기 위해서만 사용
    const onClickLeave = () => setMessage('Good Bye, World!');
    const onClickDefault = () => setMessage('What?');

    const [color, setColor] = useState('#61dafb');

    return (
        <div>
            <button onClick={onClickDefault}>Default</button>
            <button onClick={onClickEnter}>Hi</button>
            <button onClick={onClickLeave}>Bye</button>

            <h1 style={{ color }}>{message}</h1>

            <button className='hi1' style={{ color: '#61dafb' }} onClick={() => setColor('#61dafb')}>DFAULT</button>

            <button className='hi2' style={{ color: 'red' }} onClick={() => setColor('red')}>RED</button>

            <button className='hi3' style={{ color: 'green' }} onClick={() => setColor('green')}>GREEN</button>

            <button className='hi4' style={{ color: 'blue' }} onClick={() => setColor('blue')}>BLUE</button>
        </div>
    );
}

export default Say;