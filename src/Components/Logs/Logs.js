import React from 'react';
import Items from '../Items/Items';
import './Logs.css';
import Card from '../UI/Card/Card';

const Logs = (props) => {

 
    {/* 遍历Data */ }
    const logsItemData = props.logsData.map(((item, index) => <Items 
    logIndex={index} 
    onDelete={props.onDelete} 
    key={item.id} 
    desc={item.desc} 
    date={item.date} 
    time={item.time} />));
    
    return (
        <Card className='logs'>
            {logsItemData}
        </Card>
    );
};

export default Logs;