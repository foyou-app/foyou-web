import axios from "axios";
import { API_URL } from "../config";
import session from "../authstore"; 


// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent 
    config.headers.Authorization = `${session.get_token()}`;
    // OR config.headers.common['Authorization'] = `Bearer ${your_token}`;
    config.baseURL = API_URL;

    return config;
  },
  function (error) { 
    console.log("Do something with request error");
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    if (error.response) {
      if (error.response.status === 401) {
        console.log("logout");
        session.logout();
    window.location.reload(false);
      }
    } else {
      console.error("Error Message:", error.message);
    }

    return Promise.reject({ result: "aldaa" });
  }
);

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
