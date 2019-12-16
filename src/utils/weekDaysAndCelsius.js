
const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

/**
 * getDayInMonthWeekday function returns date depends by given timestamp.
 * date format: 16 December, Monday  
 */
export const getDayInMonthWeekday = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${date.getDate()} ${months[date.getMonth()]}, ${days[date.getDay()]}`;
}

/**
 * gethWeekday function returns weekday depends by given timestamp.  
 * Monday, Tuesday ...
 */
export const gethWeekday = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return `${days[date.getDay()]}`;
}

/**
 * getTempInCelsius function returns temperature by celsius.  
 */
export const getTempInCelsius = (temp) => Math.round(temp - 273.15);
