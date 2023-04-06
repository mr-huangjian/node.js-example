
/**
 * 你需要了解的opn模块
 * https://juejin.cn/post/6844903593254846471
 * 
 * opn 可以跨平台打开文件或者网站，在web应用中最常见的使用是比如项目开发或者启动的时候打开浏览器进行访问。
 */
const opn = require('opn')
opn('https://www.baidu.com', {app: 'google chrome'})

setTimeout(() => {
    opn(__dirname)
})
