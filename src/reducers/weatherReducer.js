const reducer = (state = {weather:{}}, action) => {
    switch (action.type) {
      case 'WEATHER_RECEIVED':
           console.log(action.data);
           return { ...state, weather: action.data}
      default: 
           return state;
    }
   };
   export default reducer;