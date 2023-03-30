const http = require('http')

// 不支持 HTTPS 协议的网络请求
// TypeError [ERR_INVALID_PROTOCOL]: Protocol "https:" not supported. Expected "http:"

let url = 'http://s1.9917.com/version/HWY_cn_cn/client/sdk_ios/1/clientConf.json'

http.get(url, (res) => {
    res.setEncoding('utf8')

    let data = ''
    res.on('data', (chunk) => {
        data += chunk
    })

    res.on('end', () => {
        console.log(`data:`, data)
    })
}).on('error', (err) => {
    console.error(`Error: ${err.message}`)
})
