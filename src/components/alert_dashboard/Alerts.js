import React from "react";
import DriverCard from "./DriverCard/DriverCard";

const Alerts = ({ alerts, setAlerts, handleFetchAlerts }) => {
    // console.log(alerts);
    return (
        <div className="bg-white rounded-lg">
            <div className="px-6 py-6 border-b-2 border-gray-500 text-xl font-medium text-gray-800">
                Alerts
            </div>
            <div>
                {alerts.map((item, key) => (
                    <DriverCard
                        data={item}
                        setAlertsState={setAlerts}
                        handleFetchAlerts={handleFetchAlerts}
                        key={key}
                    />
                ))}
            </div>
        </div>
    );
};

export default Alerts;
