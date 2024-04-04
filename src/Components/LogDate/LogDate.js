import React from 'react';
import './LogDate.css';

const LogDate = (props) => {
    const month = props.date.toLocaleString('en-US', {month:'short'});
    const date = props.date.getDate();
    return (
        <div>
            <div className='date'>
                <div className='month'>
                    {month}
                </div>
                <div className='day'>
                    {date}
                </div>
            </div>
        </div>
    );
};

export default LogDate;