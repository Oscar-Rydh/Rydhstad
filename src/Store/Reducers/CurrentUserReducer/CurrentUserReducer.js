import { UPDATE_CURRENT_USER } from '../../Actions/CurrentUser/actions'

const CurrentUserReducer = (state = 'oscar', action) => {

  switch(action.type) {
    
    case UPDATE_CURRENT_USER:
      return  action.user;

    default: 
      return state;
  }
}

export default CurrentUserReducer;