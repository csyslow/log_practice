import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import './LogsForm.css'

const LogsForm = (props) => {
    //存储form数据
    const [inputDate, setInputDate] = useState('');
    const [inputDesc, setInputDesc] = useState('');
    const [inputTime, setInputTime] = useState('');

    // 当表单发生变化时，获取用户输入内容
    const dateChangeHandler = (event) => {
        // event.target 触发该事件的对象，即原生DOM对象
        setInputDate(event.target.value);
    }
    const descChangeHandler = (event) => {
        // event.target 触发该事件的对象，即原生DOM对象
        setInputDesc(event.target.value);
    }
    const timeChangeHandler = (event) => {
        // event.target 触发该事件的对象，即原生DOM对象
        setInputTime(event.target.value);
    }

    //汇总表单数据
    const formSubmitHandler = (event) => {
        //取消默认
        event.preventDefault();
        //获取form数据，整合到一个对象
        const newLogData = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }
        console.log(newLogData)
        //清空表单，重新渲染
        setInputDate('');
        setInputDesc('');
        setInputTime('');
        //往父组件添加log
        props.onSaveLogs(newLogData)
    }



    return (
        <Card className='logs-form'>
            <form onSubmit={formSubmitHandler}>
                <div className='form-item'>
                    <label htmlFor='date'>Date</label>
                    <input id='date' value={inputDate} onChange={dateChangeHandler} type='date' />
                </div>
                <div className='form-item'>
                    <label htmlFor='desc'>Description</label>
                    <input id='desc' value={inputDesc} onChange={descChangeHandler} type='text' />
                </div>
                <div className='form-item'>
                    <label htmlFor='time'>Time</label>
                    <input id='time' value={inputTime} onChange={timeChangeHandler} type='text' />
                </div>
                <div className='form-btn'>
                    <button>Add</button>
                </div>

            </form>
        </Card>
    );
};

export default LogsForm;