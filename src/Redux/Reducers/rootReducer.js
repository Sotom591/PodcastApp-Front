import { combineReducers } from 'redux';
import genresReducer from './genresReducer';
import userReducer from './userReducer'

const rootReducer = combineReducers({
  genres: genresReducer,
  user: userReducer
})



export default rootReducer;
