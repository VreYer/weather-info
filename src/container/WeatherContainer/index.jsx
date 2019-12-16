import React from 'react';
import PropTypes from 'prop-types';
import DayNightChart from '../../components/DayNightChart';
import Weatherlist from '../../components/Weatherlist';
import WeekSummary from '../../components/WeekSummary';
import { Alert } from 'antd';
import { 
    getTempInCelsius, 
    getDayInMonthWeekday 
} from '../../utils/weekDaysAndCelsius';

/**
 * Container for collects all components connected the same data from APi.
 */
const WeatherContainer = ({ data, error }) => {

    if (error) {
        return <Alert message={error} type="error" />
    }

    if (!data) {
        return null;
    }
    
    let chartData = {
        labels: [],
        days: [],
        nights: [],
    };
    
    /**
     * Organizing data for the chart
     */
    data.list.forEach(element => {
        chartData.labels = [...chartData.labels, getDayInMonthWeekday(element.dt)]
        chartData.days = [...chartData.days, getTempInCelsius(element.temp.day)]
        chartData.nights = [...chartData.nights, getTempInCelsius(element.temp.night)]
    });

    return (
        <>
            <Weatherlist data={data}/>
            <DayNightChart chartData={chartData} />
            <WeekSummary data={data} />
        </>
    )
}

WeatherContainer.propTypes = {
    /** Wheather information from API */
    data: PropTypes.object,
    /** Error from API */
    error: PropTypes.string,
};

export default WeatherContainer;
