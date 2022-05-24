import axios from "axios";

import {BASE_URL, TIMEOUT} from "./config";

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
})

// 可以添加拦截器
// instance.interceptors.request;

export default instance;