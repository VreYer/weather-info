import storm from '../assets/images/006-storm.svg';
import drizzle from '../assets/images/008-rain-1.svg';
import rain from '../assets/images/009-rain-2.svg';
import snowing from '../assets/images/011-snowing.svg';
import atmosphere from '../assets/images/foggy.svg';
import clear from '../assets/images/001-sun.svg';
import clouds from '../assets/images/018-cloud.svg';

/**
 * getWeatherIcon function returns right image depends on weather code from api.  
 */
export const getWeatherIcon = (code) => {
    switch (true) {
        case code >= 200 && code <= 232:
            return storm;
        case code >= 300 && code <= 321:
            return drizzle;
        case code >= 500 && code <= 531:
            return rain;
        case code >= 600 && code <= 622:
            return snowing;
        case code >= 701 && code <= 781:
            return atmosphere;
        case code === 800:
            return clear;
        case code >= 801 && code <= 804:
            return clouds;
        default:
            break;
    }
}