const http = require('http')
const url = require('url')
const util = require('util')

http.createServer((req, resp) => {
    resp.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
    resp.end(util.inspect(url.parse(req.url, true)))
}).listen(8082)

/**
 * 访问
 * http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com
 */
