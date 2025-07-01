import * as CoreAxios from "axios";
import { ToastAndroid } from "react-native";
import { asyncStorage } from "./asyncStorage";

const axios = CoreAxios.default.create({
    baseURL: "192.168.1.46:5000",
    headers: {
        "Content-Type" : "application/json"
    }
});

axios.interceptors.request.use( async request => {
    const authToken = await asyncStorage.getToken();
    if(authToken){
        request.headers.Authorization = `Bearer ${authToken}`;
    }

    return request;
});

axios.interceptors.response.use( async response => {
    const {method} = response.config;
    if(method !== 'get'){
        ToastAndroid.show("API hit Successfully", ToastAndroid.SHORT);
    }
    return response;
},
error => {
    ToastAndroid.show("API Failed",ToastAndroid.SHORT);

    return Promise.reject(error);
}

);