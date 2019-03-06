const reducer = (state = {weather:{}}, action) => {
    switch (action.type) {
      case 'WEATHER_RECEIVED':
           return { ...state, weather: action.data}
      default: 
           return state;
    }
   };

   export default reducer;