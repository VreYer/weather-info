import React from 'react';
import PropTypes from 'prop-types';
import { gethWeekday, getTempInCelsius } from '../../utils/weekDaysAndCelsius';
import { getWeatherIcon } from '../../utils/getWeatherIcon';

import './week-summary.css';

/**
 * Component for showing 7 days weather summary.
 */
const WeekSummary = ({ data }) => {
    return (
        <div className="summary">
            {data && data.list.map(item => (
                <div key={item.dt} className="sum-item">
                    <span className="day">{gethWeekday(item.dt)}</span>
                    <img src={getWeatherIcon (item.weather[0].id)} alt=""/>
                    <div className="temp">{getTempInCelsius(item.temp.day)}<span>&deg;C</span></div>
                </div>
            ))}
        </div>
    )
}

WeekSummary.propTypes = {
    /** Wheather information from API */
    data: PropTypes.object
}

export default WeekSummary;
