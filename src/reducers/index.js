import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import ErrorMessage from './reducer_error_message';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  errorMsg: ErrorMessage,
});

export default rootReducer;
