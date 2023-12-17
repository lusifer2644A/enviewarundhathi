import {
    Autocomplete,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
    Tooltip,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import React from "react";
import VehicleData from "../../data/vehicle.json";
import { getVehicleList } from "../../APICalls/alertDashboard";

const Filters = ({ filterState, setFilterState }) => {
    const handleFromDateRangeChange = (newValue) =>
        setFilterState((o) => ({
            ...o,
            dateRange: { ...o.dateRange, from: newValue },
        }));

    const handleEndDateRangeChange = (newValue) =>
        setFilterState((o) => ({
            ...o,
            dateRange: { ...o.dateRange, to: newValue },
        }));

    return (
        <div className="flex flex-row flex-wrap gap-2 h-full items-center justify-between">
            <div className="">
                <Tooltip title="Search by Alert Type, Driver Name, Vehicle Number">
                    <TextField
                        id="outlined-basic"
                        label="Search"
                        variant="outlined"
                        value={filterState.searchedParam}
                        onChange={(e) =>
                            setFilterState((o) => ({
                                ...o,
                                searchedParam: e.target.value,
                            }))
                        }
                    />
                </Tooltip>
            </div>
            <div className=" border-r-2 border-gray-300"></div>
            <div>
                <Tooltip title="Select vehicle number">
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={getVehicleList()}
                        sx={{ width: 300 }}
                        value={filterState.vehicleNumberParam}
                        renderInput={(params) => (
                            <TextField {...params} label="Vehicle #" />
                        )}
                        onChange={(event, values) => {
                            setFilterState((o) => ({
                                ...o,
                                vehicleNumberParam: values,
                            }));
                        }}
                    />
                </Tooltip>
            </div>
            <div className=" border-r-2 border-gray-300"></div>
            <div className="flex flex-row gap-1">
                <Tooltip title="Select from date. It starts from 00:00.">
                    <div>
                        <DatePicker
                            label="From"
                            format="YYYY-MM-DD"
                            value={filterState.dateRange.from}
                            onChange={handleFromDateRangeChange}
                        />
                    </div>
                </Tooltip>
                <Tooltip title="Select till date. Date ends at 23:55.">
                    <div>
                        <DatePicker
                            label="To"
                            format="YYYY-MM-DD"
                            value={filterState.dateRange.to}
                            onChange={handleEndDateRangeChange}
                        />
                    </div>
                </Tooltip>
            </div>
            <div className=" border-r-2 border-gray-300"></div>
            <div className="flex flex-row gap-1">
                <Tooltip title="Select to see marked false alarms">
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Show false alarms"
                            checked={filterState.showOnlyFalseAlarm}
                            onChange={(e) =>
                                setFilterState((o) => ({
                                    ...o,
                                    showOnlyFalseAlarm:
                                        !filterState.showOnlyFalseAlarm,
                                }))
                            }
                        />
                    </FormGroup>
                </Tooltip>
            </div>
        </div>
    );
};

export default Filters;
