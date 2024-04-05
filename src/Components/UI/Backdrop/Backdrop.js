import React from 'react';
import './Backdrop.css';

//遮盖层
const Backdrop = (props) => {
    return (
        <div className='backDrop'>
            {props.children}
        </div>
    );
};

export default Backdrop;