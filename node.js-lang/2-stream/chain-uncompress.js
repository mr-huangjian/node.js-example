const fs = require('fs')
const zlib = require('zlib')

fs.createReadStream('package.json.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('un.package.json'))

console.log(`文件解压完毕`)
