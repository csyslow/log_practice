import React from 'react';
import Items from '../Items/Items';
import './Logs.css';
import Card from '../UI/Card/Card';

const Logs = (props) => {

 
    {/* 遍历Data */ }
    const logsItemData = props.logsData.map((item => <Items key={item.id} desc={item.desc} date={item.date} time={item.time} />));
    
    return (
        <Card className='logs'>
            {logsItemData}
            {/* 属性名和参数名一样, 可以解构 */}
            {props.logsData.map((item => <Items key={item.id} {...item} />))}
        </Card>
    );
};

export default Logs;