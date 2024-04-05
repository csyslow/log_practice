import React from 'react';
import './Backdrop.css';
import ReactDOM from 'react-dom'
//获取backdrop-root
const backdropRoot = document.getElementById('backdrop-root');
//遮盖层
const Backdrop = (props) => {
    return (

        //开启portal
        ReactDOM.createPortal(
            (<div className='backdrop'>
                {props.children}
            </div>)
            , backdropRoot)

    );
};

export default Backdrop;