// Forecaster.js
import React from 'react';
import WeatherChannel from './WeatherChannel';

// internally used by Forecaster, so no need to export
function DailyItem(props) {
    const day = props.day;
    return (
        <div className="item">
            <span>{day.weekday}</span>
            <span>
                <img src={day.icon_url} />
            </span>
            <span>{day.high}</span>
            <span>{day.low}</span>
        </div>
    )
}

export default function Forecaster(props) {
    const {days} = props;
    const day1 = days[0], day2 = days[1], day3 = days[2];
    return (
        <div>
            <DailyItem day={day1} />
            <DailyItem day={day2} />
            <DailyItem day={day3} />
           
        </div>
    )
}