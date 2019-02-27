import { combineReducers } from 'redux';
import genresReducer from './genresReducer';

const rootReducer = combineReducers({
  genres: genresReducer
})

export default rootReducer;
