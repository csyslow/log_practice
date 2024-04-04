import React from 'react';
import LogDate from '../LogDate/LogDate';
import './Items.css'
import Card from '../UI/Card/Card';

const Items = (props) => {
    return (
        <Card className='item'>
            {/* 日期容器 */}
            <LogDate date={props.date}/>
            {/* 事件 */}
            <div className='content'>
                <h2 className='desc'>{props.desc}</h2>
                <div className='time'>{props.time} min</div>
            </div>
        </Card>
    );
};

export default Items;