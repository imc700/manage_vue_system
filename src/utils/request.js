import axios from 'axios';
import router from '../router/index';


const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    // baseURL: 'http://localhost:40400',
    timeout: 10000
});

service.interceptors.request.use(
    config => {
        return config;
    }
    ,
    error => {
        console.log(error);
        return Promise.reject();
    }
);

service.interceptors.response.use(
    response => {
        console.log("######",response.status);
        if (response.status === 200) {
            return response.data;
        }else {
            Promise.reject();
        }
    },
    error => {
        console.log(error);
         if(error.response.status === 401 || error.response.status === 403) {
            // this.$router.push({path:'/login', query:{redirect:location.hostname}})
            console.log("###401###");
             alert("身份已过期，请重新登录");
             router.push("/login");
        }
        return Promise.reject("请重新登录!");
    }
);




export default service;

//
//
// const MyPlugin = {}
//
// MyPlugin.install = function (Vue) {
//
//     Vue.prototype.$service = service;
// }

// export default {
//     install (Vue) {
//         Vue.prototype.$service = service;
//     }
// }
