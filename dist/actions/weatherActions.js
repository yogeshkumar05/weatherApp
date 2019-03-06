export const fetchWeatherAction = zipcode => ({
    type: 'FETCH_WEATHER',
    payload: {
        zipcode
    }

});