import { mainConstants } from "../constants";
 
const initialState = {
  pages:null,
  info:null
}
const root = function main(state = initialState, action) {
  switch (action.type) {
    case mainConstants.PAGE_DATA:
      return { 
        pages: action.payload,
      };
    case mainConstants.PAGE_INFO_DATA:
        return { 
          info: action.payload,
        };   
    default:
      return state;
  }
};

export default root;
