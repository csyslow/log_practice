import Logs from "./Components/Logs/Logs";
import './App.css';
import Card from "./Components/UI/Card/Card";
import LogsForm from "./Components/LogsForm/LogsForm";
import { useState } from "react";

const App = () => {
    const initialState = [
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
    ];
    const [logsData,setLogsData] = useState(initialState)
 

    const saveLogsHandler = (newLogsData) => {
        newLogsData.id = Date.now() + '';
        setLogsData([newLogsData, ...logsData])
        console.log(logsData)
    }

    return <div className="app">
        <LogsForm  onSaveLogs={saveLogsHandler}/>
        <Logs logsData={logsData} />
    </div>
}

export default App;