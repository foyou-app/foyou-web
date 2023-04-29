import { combineReducers } from "redux"; 
import authentication from './authentication';
import mainReducerd from './mainReducer'; 
const rootReducer = combineReducers({ 
    mainReducer: mainReducerd,      
    authentication: authentication,
});
export default rootReducer;