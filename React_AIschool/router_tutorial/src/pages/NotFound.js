import React from 'react';

const NotFound = () => {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '120px',
                position: 'absolute',
                width: '100%',
                height: '100%',
                color: '#61dafb',
                fontWeight: 'bolder',
            }}
        >
            404 Not Found
        </div>
    );
};

export default NotFound;