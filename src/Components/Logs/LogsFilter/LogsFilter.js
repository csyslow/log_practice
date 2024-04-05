import React from 'react';

const LogsFilter = (props) => {

    const yearChangeHandler = (event) => {
        console.log(event.target.value)
        props.onYearChange(+event.target.value)
    }

    return (
        <div>
            Select Year:&nbsp;&nbsp;
            <select value={props.currentYear} onChange={yearChangeHandler}>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
            </select>
        </div>
    );
};

export default LogsFilter;