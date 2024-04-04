import Logs from "./Components/Logs/Logs";
import './App.css';
import Card from "./Components/UI/Card/Card";
import LogsForm from "./Components/LogsForm/LogsForm";

const App = () => {
    return <div className="app">
        <LogsForm />
        <Logs />
    </div>
}

export default App;