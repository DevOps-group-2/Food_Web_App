import TimePicker from 'react-dropdown-timepicker';
import {Component, useState} from "react";
import {DatePicker} from "@mui/lab";

function TimeTest() {

    const [startDate, setStartDate] = useState(new Date());

    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            shouldCloseOnSelect={false}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={15}
            dateFormat="h:mm aa"
        />
    );

}

export default TimeTest;