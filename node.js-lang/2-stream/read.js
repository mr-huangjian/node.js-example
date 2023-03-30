const fs = require('fs')
let data = ''

const stream = fs.createReadStream('../package.json')
stream.setEncoding('utf8')

stream.on('data', (chunk) => {
    data += chunk
})

stream.on('end', () => {
    console.log('end', data)
})

stream.on('error', (err) => {
    console.log('error', err)
})
