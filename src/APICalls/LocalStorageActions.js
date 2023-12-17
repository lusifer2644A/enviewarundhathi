import VehicleData from "../data/vehicle.json";
import AlertsData from "../data/alerts.json";

const VEHICLE_DATA = "vehicle_data";
const ALERTS_DATA = "alerts_data";

export const mountLocalStorage = () => {
    if (!localStorage.getItem(VEHICLE_DATA))
        localStorage.setItem(VEHICLE_DATA, JSON.stringify(VehicleData));

    if (!localStorage.getItem(ALERTS_DATA))
        localStorage.setItem(ALERTS_DATA, JSON.stringify(AlertsData));
};

export const fetchAlertsFromDB = () => {
    return JSON.parse(localStorage.getItem(ALERTS_DATA));
};

export const setAlertsToDB = (alerts) => {
    localStorage.setItem(ALERTS_DATA, JSON.stringify(alerts));
};
