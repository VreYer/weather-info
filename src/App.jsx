import React, {useEffect} from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

import 'antd/dist/antd.css';
import CitiesList from './components/CitiesList';
import { fetchWeatherDataRequestAsync } from './store/weather/weather.actions';
import WeatherContainer from './container/WeatherContainer';
import WithSpinner from './components/Spinner';
import { citiesList } from './utils/citiesList';

const WeatherListWithSpinner = WithSpinner(WeatherContainer);

/**
 * Main App component.
 */
const App = (props) => {

    const { defaultCity, fetchWeatherDataRequestAsync, loading } = props;

    useEffect(() => {
        /** Requesting to API fot weather data  */
        fetchWeatherDataRequestAsync(defaultCity);
    }, [fetchWeatherDataRequestAsync, defaultCity]);

    const onChangeCities = (value) => {
        fetchWeatherDataRequestAsync(value);
    }

    return (
        <main className="main-container">
            <Row>
                <Col span={12} offset={6}>
                    <CitiesList 
                        data={citiesList}
                        defaultValue={defaultCity}
                        onChangeCities={onChangeCities}
                        />
                    <WeatherListWithSpinner isLoading={loading} {...props}/>
                </Col>
            </Row>
        </main>
    );
}

const mapStateToProps = (state) => ({
    defaultCity: state.weather.defaultCity,
    data: state.weather.weather,
    loading: state.weather.loading,
    error: state.weather.error
})

const mapDispatchToProps = (dispatch) => ({
    fetchWeatherDataRequestAsync: (city) => dispatch(fetchWeatherDataRequestAsync(city))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
