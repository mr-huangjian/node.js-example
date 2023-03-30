const fs = require('fs')

const path = '/Users/mr.huangjian/Desktop/nodejs-cmd/package.json'
fs.stat(path, (err, stats) => {
    if (err) {
        console.error(err)
    } else {
        console.log(stats)
        console.log('isFile:', stats.isFile())
        console.log('isDirectory:', stats.isDirectory())
    }
})
