const fs = require('fs')

/**
    异步地写入数据到文件，如果文件已经存在，则替代文件
 */

const path = './test.txt'
fs.writeFile(path, 'Hello Node.js', 'utf8', (err) => {
    if (err) {
        console.log(err)
    }
})
