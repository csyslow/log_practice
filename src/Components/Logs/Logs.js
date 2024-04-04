import React from 'react';
import Items from '../Items/Items';
import './Logs.css';

const logs = () => {

    //data from server
    const logsData = [
        {
            id: 1,
            desc: 'Learning TypeScript',
            date: new Date(2021, 7, 20, 19, 0),
            time: '50'
        },
        {
            id: 2,
            desc: 'Get OINP',
            date: new Date(2024, 3, 21, 19, 0),
            time: '30'
        },
        {
            id: 3,
            desc: 'Learning AJAX',
            date: new Date(2023, 10, 20, 19, 0),
            time: '120'
        }
    ]
    {/* 遍历 */ }
    const logsItemData = logsData.map((item => <Items key={item.id} desc={item.desc} date={item.date} time={item.time} />));
    return (
        <div className='logs'>
            {logsItemData}
            {/* 属性名和参数名一样, 可以解构 */}
            {logsData.map((item => <Items key={item.id} {...item} />))}
        </div>
    );
};

export default logs;