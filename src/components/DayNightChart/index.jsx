import React from 'react';
import {Bar} from 'react-chartjs-2';
import PropTypes from 'prop-types';

import './chart.css';

/**
 * This is a initial data for chart.
 */
const mainData = {
    datasets: [
        {
            label: 'Day',
            backgroundColor: 'rgba(243, 156, 18, 0.5)',
            borderColor: 'rgba(243, 156, 18, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(243, 156, 18, 0.7)',
            hoverBorderColor: 'rgba(243, 156, 18, 1)'
        },
        {
            label: 'Night',
            backgroundColor: 'rgba(127, 140, 141, 0.5)',
            borderColor: 'rgba(127, 140, 141, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(127, 140, 141, 0.7)',
            hoverBorderColor: 'rgba(127, 140, 141, 1)'
        }
    ]
};

/**
 * Chart component for show day and night temperature changes.
 */
const DayNightChart = ({ chartData }) => {

    /**
     * Here we are adding missing dynamic information about temperature in the chart.  
     */
    mainData.labels = chartData.labels
    mainData.datasets[0].data = chartData.days
    mainData.datasets[1].data = chartData.nights

    return (
        <div className="chart-block">
            <h2>Graph of temperature changes days and nights.</h2>
            <Bar
                data={mainData}
                width={100}
                height={50}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    )
}

DayNightChart.propTypes = {
    /** Organized data for the chart */
    chartData: PropTypes.object
};

export default DayNightChart;
