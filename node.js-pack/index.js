var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(util.inspect(url.parse(req.url, true)));
}).listen(3000);

/**
    访问
    http://localhost:3000/user?name=菜鸟教程&url=www.runoob.com

    打包工具
    npm i -g pkg

    打包命令，生成可执行文件
        - 打包入口    `index.js`
        - 打包平台    `-t node14-macos-x64,node14-win-x64,node14-linux-x64`
        - 输出文件    `-o xyz` 在命令行执行所在目录生成 `xyz` 可执行文件
    pkg index.js -t node14-macos-x64 -o nodeserver

    执行可执行文件
    ./nodeserver

    如果有静态资源，如何将静态资源打进去

 */
