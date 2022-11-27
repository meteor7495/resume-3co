import Axios from "axios";
import { API_URL } from "../configs";
import storage from "../utils/storage";


function authRequestInterceptor(config) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = "application/json";
  config.timeout = 20000;
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    if(response.data?.data) {
      return response.data.data;
    }
    else{
      return {status: "Success"};
    }
  },
  (error) => {
    let message =  error.response?.data || error.message;
    if(error.response.status === 401){
      message = { ...message , unAuthorize : true  };
    }else if(error.response.status === 403){
      message = { ...message , unAuthorize : true , unVerified : true  };
    }else {
      message = {...message, unAuthorize: false};
    }
    console.log(message);
    return message;
  }
);
