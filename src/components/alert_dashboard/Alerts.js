import React from "react";
import DriverCard from "./DriverCard/DriverCard";

const Alerts = ({ alerts, setAlerts, handleFetchAlerts }) => {
    // console.log(alerts);
    return (
        <div className="bg-white rounded-lg">
            <div className="px-6 py-6 border-b-2 border-gray-500 text-xl font-medium text-gray-800">
                Alerts
            </div>
            {alerts.length ? (
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
            ) : (
                <div className="w-full h-60 relative p-10">
                    <img
                        src="/no-search-found.png"
                        className="w-full h-full object-contain relative"
                        alt=""
                    />
                </div>
            )}
        </div>
    );
};

export default Alerts;
