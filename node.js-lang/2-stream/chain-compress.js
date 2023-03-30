const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('../package.json')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('package.json.gz'))

console.log(`文件压缩完毕`)
