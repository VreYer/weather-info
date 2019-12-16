import { WeatherActionTypes } from './weather.types';
  
const initialState = {
    defaultCity: 'Skodsborg,DK',
    loading: true,
    error: null,
    weather: null,
};
  
const weatherReducer = (state = initialState, action) => {
    
    switch(action.type) {
  
        case WeatherActionTypes.FETCH_WEATHER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                weather: null
            }

        case WeatherActionTypes.FETCH_WEATHER_SUCCESS:
            return {
                ...state,
                weather: action.payload,
                error: null,
                loading: false
            }
    
        case WeatherActionTypes.FETCH_WEATHER_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
        // Always have a 'default' case which simply returns a current `state`
            return state
    }
}

export default weatherReducer;