import moment from "moment";
import VehicleData from "../data/vehicle.json";
import { fetchAlertsFromDB, setAlertsToDB } from "./LocalStorageActions";

export const getVehicleList = () => {
    if (!VehicleData) return [];

    return VehicleData.map((item) => item.friendly_name);
};

export const fetchAlerts = (filterState) => {
    let alerts = fetchAlertsFromDB();

    if (
        filterState.searchedParam === "" &&
        !filterState.vehicleNumberParam &&
        !filterState.dateRange.from &&
        !filterState.dateRange.to &&
        !filterState.showOnlyFalseAlarm
    )
        return alerts;

    let searchedAlerts = [];

    let lowerSearchedParam = filterState.searchedParam.toLowerCase();

    searchedAlerts = alerts.filter((item) => {
        const searchedParamCondition =
            lowerSearchedParam !== ""
                ? item.driver_friendly_name
                      .toLowerCase()
                      .includes(lowerSearchedParam) ||
                  item.alert_type.toLowerCase().includes(lowerSearchedParam) ||
                  item.vehicle_friendly_name
                      .toLowerCase()
                      .includes(lowerSearchedParam)
                : true;

        const vehicleNUmberCondition = filterState.vehicleNumberParam
            ? item.vehicle_friendly_name === filterState.vehicleNumberParam
            : true;

        const dateCondition =
            filterState.dateRange.from && filterState.dateRange.to
                ? moment(item.timestamp).isBetween(
                      filterState.dateRange.from,
                      filterState.dateRange.to
                  )
                : filterState.dateRange.from
                ? moment(item.timestamp).isAfter(filterState.dateRange.from)
                : filterState.dateRange.to
                ? moment(item.timestamp).isBefore(filterState.dateRange.to)
                : 1;

        const showOnlyFalseAlarmCondition = filterState.showOnlyFalseAlarm
            ? item.isFalseAlarm === true
            : true;

        // console.log(
        //     searchedParamCondition,
        //     vehicleNUmberCondition,
        //     dateCondition,
        //     showOnlyFalseAlarmCondition
        // );
        return (
            searchedParamCondition &&
            vehicleNUmberCondition &&
            dateCondition &&
            showOnlyFalseAlarmCondition
        );
    });

    return searchedAlerts;
};

export const markFalseAlarm = (alarmId, handleFetchAlerts) => {
    if (alarmId === null) return;

    const alerts = fetchAlertsFromDB();
    const alarmIdx = alerts.findIndex((item) => item.id === alarmId);

    if (alarmIdx === null) return;

    alerts[alarmIdx].isFalseAlarm = true;

    setAlertsToDB(alerts);
    handleFetchAlerts();
};

export const unMarkFalseAlarm = (alarmId, handleFetchAlerts) => {
    if (alarmId === null) return;

    const alerts = fetchAlertsFromDB();
    const alarmIdx = alerts.findIndex((item) => item.id === alarmId);

    if (alarmIdx === null) return;

    alerts[alarmIdx].isFalseAlarm = false;

    setAlertsToDB(alerts);
    handleFetchAlerts();
};
