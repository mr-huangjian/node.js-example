const axios = require('axios');

/**
 Axios 官网
    https://axios-http.com/zh/docs/intro
 */

let url = 'http://httpbin.org/get'
let options = {
    params: {
        a: 10,
        b: 20
    }
}

url = 'https://s1.9917.com/version/HWY_cn_cn/client/sdk_ios/1/clientConf.json'
url = 'https://nodejs.org/dist/index.json'

axios.get(url, options).then((resp) => {
    // [ 'status', 'statusText', 'headers', 'config', 'request', 'data' ]
    // console.log(Object.keys(resp));

    // console.log(resp.status); // 200
    // console.log(resp.statusText); // OK
    // console.log(resp.config); // 包含请求的所有配置
    // console.log(resp.data); // 自动解析数据
    console.log(resp);
}).catch((error) => {
    console.log(error);
})
