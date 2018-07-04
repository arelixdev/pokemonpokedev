import React from 'react';

const Scroll = (props) => {
    return (
        <div className="bg-white" style={{overflowY: 'scroll', border: '1px solid black', height: '500px', margin:'25px' } }>
            {props.children}
        </div>
    );
}

export default Scroll;