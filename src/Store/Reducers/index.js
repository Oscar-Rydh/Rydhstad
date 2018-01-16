import BlogReducer from './BlogReducer';
import CurrentUserReducer from './CurrentUserReducer';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
  blogs: BlogReducer,
  currentUser: CurrentUserReducer
})



export default RootReducer;