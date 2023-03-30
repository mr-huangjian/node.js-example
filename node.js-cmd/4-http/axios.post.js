const axios = require('axios');

let url = 'http://httpbin.org/post'
let data = {
    name: 'hj',
    age: 20
}

axios.post(url, data).then((resp) => {
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
