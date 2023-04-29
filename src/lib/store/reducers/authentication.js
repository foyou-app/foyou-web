import { mainConstants } from '../constants';

let user = JSON.parse(localStorage.getItem('user_info'));
const initialState = user ? { loggedIn: true, user,menu_udird:0 } : {menu_udird:0};

const root = function authentication(state = initialState, action) {
  switch (action.type) {
  
  
    case mainConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case mainConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case mainConstants.LOGIN_FAILURE:
      return {};
    case mainConstants.LOGOUT:
      return {};
    default:
      return state
  }
}


export default root