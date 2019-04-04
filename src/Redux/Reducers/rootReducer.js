import { combineReducers } from 'redux';
import genresReducer from './genresReducer';
import userReducer from './userReducer'
import podcastsReducer from './podcastReducer'

const rootReducer = combineReducers({
  genres: genresReducer,
  user: userReducer,
  podcasts: podcastsReducer
})



export default rootReducer;
