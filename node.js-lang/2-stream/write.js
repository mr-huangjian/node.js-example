const fs = require('fs')

const data = 'Hello Node.js'
const stream = fs.createWriteStream('./temp.text')
stream.write(data, 'UTF8')
stream.end()

stream.on('finish', () => {
    console.log(`写入完成`);
})

stream.on('error', (err) => {
    console.log('error', err)
})
