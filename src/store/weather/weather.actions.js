import { WeatherActionTypes } from './weather.types';
import { baseWeatherURI, apiID } from '../../utils/constants';

export const fetchWeatherDataRequest = () => ({
    /**
     * This action is used to tell Reducer that we are starting to request for data
     * from the API. As an example, Reducer sets application State to display "loading" indicator.  
     */
    type: WeatherActionTypes.FETCH_WEATHER_REQUEST
});

export const fetchWeatherDataSuccess = (weatherData) => ({
    /**
     * All went well. We received our data from the API. `payload` is a JSON object that we
     * received from the API.  
     */
    type: WeatherActionTypes.FETCH_WEATHER_SUCCESS,
    payload: weatherData
});

export const fetchWeatherDataError = (errorMessage) => ({
    /**
     * An Action that notifies Reducer about a fact that something went wrong during data fetch.
     * `error` here represents an error message that we could potentially get from the API.  
     */
    type: WeatherActionTypes.FETCH_WEATHER_FAILURE,
    payload: errorMessage
});

export const fetchWeatherDataRequestAsync = (city) => dispatch => {
    dispatch(fetchWeatherDataRequest());
    fetch(`${baseWeatherURI}?q=${city}&cnt=7&&appid=${apiID}`)
        .then(response => {
            if (response.status !== 200) {
                throw new Error(response.statusText)
            } else {
                return response.json();
            }
        })
        .then(data => dispatch(fetchWeatherDataSuccess(data)))
        .catch(error => dispatch(fetchWeatherDataError(error.message)));
}