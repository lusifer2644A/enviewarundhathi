import logo from "./logo.svg";
import "./App.css";
import AlertDashboard from "./components/alert_dashboard/Dashboard";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useEffect } from "react";
import { mountLocalStorage } from "./APICalls/LocalStorageActions";

function App() {
    useEffect(() => {
        mountLocalStorage();
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <div className="App">
                <AlertDashboard />
            </div>
        </LocalizationProvider>
    );
}

export default App;
