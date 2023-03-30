const fs = require('fs')

const path = '/Users/mr.huangjian/Desktop/nodejs-cmd/package.json'
fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log(JSON.parse(data))
    }
})
