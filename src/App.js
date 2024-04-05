import Logs from "./Components/Logs/Logs";
import './App.css';
import Card from "./Components/UI/Card/Card";
import LogsForm from "./Components/LogsForm/LogsForm";
import { useState } from "react";
import ConfirmModal from "./Components/UI/ConfirmModal/ConfirmModal";
import Backdrop from "./Components/UI/Backdrop/Backdrop";

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
    const [logsData, setLogsData] = useState(initialState)


    const saveLogsHandler = (newLogsData) => {
        newLogsData.id = Date.now() + '';
        setLogsData([newLogsData, ...logsData])
        console.log(logsData)
    }

    // const deleteLogHandler = (index) => {
    //     setLogsData(prevState => {
    //         const newLogs = [...prevState];
    //         newLogs.splice(index,1);
    //         return newLogs
    //     });
    // }

    const deleteLogHandler = (id) => {
        setLogsData(prevState => {
            const newLogs = prevState.filter(item => item.id !== id);
            return newLogs
        });
    }

    return <div className="app">
        <LogsForm onSaveLogs={saveLogsHandler} />
        <Logs logsData={logsData} onDelete={deleteLogHandler} />
    </div>
}

export default App;