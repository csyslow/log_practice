import React, { useCallback, useState } from 'react';
import LogDate from '../LogDate/LogDate';
import './Items.css'
import Card from '../UI/Card/Card';
import ConfirmModal from '../UI/ConfirmModal/ConfirmModal';

const Items = (props) => {
    //state for confirm pop-up window
    const [showConfirm, setShowConfirm] = useState(false);

    const deleteHandler = () => {
        setShowConfirm(true)
    }

    const cancelHandler = () => {
        setShowConfirm(false)

    }

    const confirmHandler = () => {

    }
    return (
        <Card className='item'>
            {showConfirm && <ConfirmModal 
            confirmInfo='Delete This Log?'
            onCancel={cancelHandler}
            onConfirm={confirmHandler}
            />}
            {/* 日期容器 */}
            <LogDate date={props.date} />
            {/* 事件 */}
            <div className='content'>
                <h2 className='desc'>{props.desc}</h2>
                <div className='time'>{props.time} min</div>
            </div>
            <div>
                <div className='delete' onClick={deleteHandler}>✖️</div>
            </div>
        </Card>
    );
};

export default Items;