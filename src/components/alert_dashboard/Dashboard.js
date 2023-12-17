import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import Alerts from "./Alerts";
import { fetchAlerts } from "../../APICalls/alertDashboard";

const Dashboard = () => {
    const [filterState, setFilterState] = useState({
        searchedParam: "",
        vehicleNumberParam: null,
        dateRange: {
            from: null,
            to: null,
        },
        showOnlyFalseAlarm: false,
    });

    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        handleFetchAlerts();
    }, [filterState]);

    let handleFetchAlerts = () => {
        const alerts = fetchAlerts(filterState);
        setAlerts(alerts);
    };

    // console.log(filterState);

    return (
        <div className="bg-grey-500 min-h-screen min-w-screen p-5 flex flex-col gap-5">
            <div>
                <Filters
                    filterState={filterState}
                    setFilterState={setFilterState}
                />
            </div>
            <div>
                <Alerts
                    alerts={alerts}
                    setAlerts={setAlerts}
                    handleFetchAlerts={handleFetchAlerts}
                />
            </div>
        </div>
    );
};

export default Dashboard;
