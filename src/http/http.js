import axios from "axios";

import md5 from "md5";
//import constants from "@/http/constants";

const CancelToken = axios.CancelToken;
const getRequestKey = (config) => {
    if ( !config ){
        // 如果没有获取到请求的相关配置信息，根据时间戳生成
        return md5(+new Date());
    }
    const data = typeof config.data === 'string' ? config.data : JSON.stringify(config.data);
    return md5(config.url + '&' + config.method + '&' + data);
};
// 存储key值
const pending = {};
// 检查key值
const checkPending = (key) => !!pending[key];
// 删除key值
const removePending = (key) => {
    delete pending[key];
};
const service = axios.create({baseURL:"http://localhost:8080/BugControl_war", timeout:30000});
service.interceptors.request.use(function (config) {
    console.log("请求拦截", config);

    const key = getRequestKey(config);



    if (checkPending(key)){
        console.log("重复请求")
        const source = CancelToken.source();
        config.cancelToken = source.token;
        source.cancel("重复请求");
        pending[key] = false
    }else {
        pending[key] = true
    }

    return config;

}, function (error) {
    return Promise.reject(error);
})

service.interceptors.response.use(function (response) {
    console.log("响应拦截", response);
    const key = getRequestKey(response.config);
    removePending(key);
    return response;
}, function (error) {
    return Promise.reject(error);
})



/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function doGet(url, params = {}, config = {}) {
    return service.get(url, {
        params: params,
        ...config
    })
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function doPost(url, params, config = {}) {
    return service.post(url, {
        method: 'post',
        data: params,
        ...config
    })
}
export default service;