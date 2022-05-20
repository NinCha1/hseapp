// import {create} from "apisauce";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://my-json-server.typicode.com/SKYMAN44/FAKEJSONSERVER",
});

export default axiosInstance;