import React from 'react';
import { Tabs } from 'antd';
import { getDayInMonthWeekday, getTempInCelsius } from '../../utils/weekDaysAndCelsius';
import WithSpinner from '../Spinner';
import { getWeatherIcon } from '../../utils/getWeatherIcon';
import PropTypes from 'prop-types';

import './weather.css';

const { TabPane } = Tabs;

/**
 * Component for the making list of 7 days weather forecast.
 */
const WeatherList = ({ data }) => {    
    return (
        <div className="main-lists-block">
            <h1 className="city-name">{data.city.name}, {data.city.country}</h1>
            <Tabs tabPosition={'left'}>
                {data.list && data.list.map(item => (
                    <TabPane key={item.dt} tab={getDayInMonthWeekday(item.dt)} className="weather-item">
                        <h4 className="tab-date-area">{getDayInMonthWeekday(item.dt)}</h4>
                        <div className="temperature max-350">
                            <img src={getWeatherIcon(item.weather[0].id)} alt="Temperature" />
                            <div className="temperature-text">{getTempInCelsius(item.temp.day)}<span>&deg;C</span></div>
                        </div>
                        <div className="temp-description">{item.weather[0].description}</div>
                        <div className="temperature-range max-350">
                            <div className="range-half">Min: {getTempInCelsius(277.15)} &deg;C</div>
                            <div className="range-half">Max: {getTempInCelsius(285.15)} &deg;C</div>
                        </div>
                        <div className="temperature-additionals">
                            <div className="add-item">
                                <strong>Humidity</strong>
                                <span>{item.humidity}%</span>
                            </div>
                            <div className="add-item">
                                <strong>Pressure</strong>
                                <span>{item.pressure}</span>
                            </div>
                        </div>
                    </TabPane>
                ))}
            </Tabs>
        </div>
    )
}

WeatherList.propTypes = {
    /** Wheather information from API */
    data: PropTypes.object
};

export default WithSpinner(WeatherList);
