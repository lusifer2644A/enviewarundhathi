import { Button, Tooltip } from "@mui/material";
import moment from "moment";
import React from "react";
import {
    markFalseAlarm,
    unMarkFalseAlarm,
} from "../../../APICalls/alertDashboard";

const DriverCard = ({ data, setAlertsState, handleFetchAlerts }) => {
    const convertTimestamp = (timestamp) => {
        let c = moment(timestamp);
        let date = c.format("DD MMMM YYYY");
        let time = c.format("h:mm A ");

        return date + " at " + time;
    };

    const setFalseAlarm = (alarmId) => {
        markFalseAlarm(alarmId, handleFetchAlerts);
    };

    const unsetFalseAlarm = (alarmId) => {
        unMarkFalseAlarm(alarmId, handleFetchAlerts);
    };

    return (
        <div className="px-6 py-6 border-b-2 border-gray-300">
            <div className="flex flex-row gap-2 justify-between items-center">
                {/* details area */}
                <Tooltip title={`Alarm Id: ${data.id}`}>
                    <div>
                        <div>
                            <span className="text-xl font-medium text-gray-700">
                                {data.alert_type} •&nbsp;
                            </span>
                            <span className="text-base font-medium text-gray-500">
                                {convertTimestamp(data.timestamp)}
                            </span>
                        </div>
                        <div className="mt-1">
                            <span className="text-lg font-medium text-gray-700">
                                Driver:&nbsp;
                            </span>
                            <span className="text-base font-medium text-gray-500">
                                {data.driver_friendly_name} /&nbsp;
                                {data.vehicle_friendly_name}
                            </span>
                        </div>
                    </div>
                </Tooltip>

                {/* action area */}
                <div>
                    {data.isFalseAlarm ? (
                        <Tooltip title="Click to unmark false alarm">
                            <Button
                                variant="outlined"
                                startIcon={
                                    <img
                                        width="24"
                                        height="24"
                                        src="https://img.icons8.com/material-sharp/24/757575/notification-off.png"
                                        alt="notification-off"
                                    />
                                }
                                sx={{ color: "gray", borderColor: "gray" }}
                                onClick={() => unsetFalseAlarm(data.id)}
                            >
                                Marked As False Alarm
                            </Button>
                        </Tooltip>
                    ) : (
                        <Tooltip title="Click to mark it false alarm">
                            <Button
                                variant="outlined"
                                color="error"
                                startIcon={
                                    <img
                                        width="24"
                                        height="24"
                                        src="https://img.icons8.com/material-sharp/24/D32F2F/notification-off.png"
                                        alt="notification-off"
                                    />
                                }
                                // sx={{ color: "gray", borderColor: "gray" }}
                                onClick={() => setFalseAlarm(data.id)}
                            >
                                Mark As False Alarm
                            </Button>
                        </Tooltip>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DriverCard;
