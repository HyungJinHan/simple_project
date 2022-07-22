import React, { useState } from 'react';
import { MdDns } from 'react-icons/md';

const TodoUpdate = (props) => {
    const [id, setId] = useState(props.id);
    const [pw, setpw] = useState(props.pw);
    const [email, setEmail] = useState(props.email);
    const [email_sel, setEmail_sel] = useState(props.email_sel);
    const [gender, setGender] = useState(props.gender);

    return (
        <div>
            <form>
                <button
                    className='update_btn'
                    onClick={(e) => {
                    }}
                ><MdDns /></button>
            </form>
        </div>
    );
};

export default TodoUpdate;