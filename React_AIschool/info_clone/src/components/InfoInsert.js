import React from 'react';
import './InfoInsert.scss';

const InfoInsert = () => {
    return (
        <form className="InfoInsert">
            <table>
                <tbody>
                    <tr>
                        <th width="110px">
                            이름
                        </th>
                        <td width="440px">
                            <input
                                type="text"
                                name="name"
                                placeholder='이름을 입력하세요.'
                            />
                        </td>
                    </tr>
                    <tr>
                        <th width="110px">댓글</th>
                        <td width="440px">
                            <textarea
                                name="comment"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align="center">
                            <button
                                name="btn"
                            >
                                등록
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form >
    );
};

export default InfoInsert;