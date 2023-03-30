const fs = require('fs')

const rstream = fs.createReadStream('../package.json')
const wstream = fs.createWriteStream('temp.package.json')
rstream.pipe(wstream)

console.log(`程序执行完毕`)
