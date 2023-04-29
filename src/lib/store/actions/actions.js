import httpService from "../../utils/httpService";
import {mainConstants} from "./../constants/index";
export const web_pages = (params) => async (dispatch) => {
  try {
    return httpService
      .post("/api/web/pages", params)
      .then((resp) => {      
        dispatch({ type: mainConstants.PAGE_DATA, payload:  resp.data });   
        return resp.data;
      })
      .catch((error) => {        
        return error;
      });
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const web_data = (params) => async (dispatch) => {
  try {
    return httpService
      .get("/api/web/info")
      .then((resp) => {      
        dispatch({ type: mainConstants.PAGE_INFO_DATA, payload:  resp.data });   
        return resp.data;
      })
      .catch((error) => {        
        return error;
      });
  } catch (e) {
    console.log(e);
    return e;
  }
}; 
