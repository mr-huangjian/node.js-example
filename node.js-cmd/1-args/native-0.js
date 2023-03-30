
/**
    获取命令行参数
    process.argv[0] 是指 node 命令所在的绝对路径
    process.argv[1] 是指 app.js 文件所在的绝对路径

    https://www.runoob.com/w3cnote/node-js-command-develop.html
 */

const args = process.argv
console.log(args)

/**
    % node 0.js '{"name":"hj"}'
    [
        '/usr/local/Cellar/node/17.8.0/bin/node',
        '/Users/mr.huangjian/Desktop/nodejs-cmd/01-get-args0.js',
        '{"name":"hj"}'
    ]
 */
