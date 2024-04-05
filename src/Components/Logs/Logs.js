import React, { useCallback, useState } from 'react';
import Items from '../Items/Items';
import './Logs.css';
import Card from '../UI/Card/Card';
import LogsFilter from './LogsFilter/LogsFilter';

const Logs = (props) => {
    const [year, setYear] = useState(2023);
    console.log(props.logsData);
    let filterData = props.logsData.filter(item => item.date.getFullYear() === year);
    console.log(year, filterData)

    {/* 遍历Data */ }
    const logsItemData = filterData.map(((item) => <Items
        logId={item.id}
        onDelete={props.onDelete}
        key={item.id}
        desc={item.desc}
        date={item.date}
        time={item.time} />));

    const updateYear = (year) => {
        setYear(year);
    }

    return (
        <Card className='logs'>
            <LogsFilter currentYear={year} onYearChange={updateYear}/>

            {logsItemData.length !== 0 ? logsItemData : <p className='no-logs'>No Logs Now!</p>}
        </Card>
    );
};

export default Logs;