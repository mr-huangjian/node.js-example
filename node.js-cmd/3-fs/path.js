const path = require('path')

const filepath = '/Users/mr.huangjian/Desktop/nodejs-cmd/package.json'
console.log(`[1]`, path.basename(filepath))
console.log(`[2]`, path.basename(filepath, '.json'))
console.log(`[3]`, path.extname(filepath))
console.log(`[4]`, path.dirname(filepath))
console.log(`[5]`, path.isAbsolute(filepath))
console.log(`[6]`, path.parse(filepath))
console.log(`[7]`, path.sep)
console.log(`[8]`, __filename)
console.log(`[9]`, __dirname)
console.log(`[10]`, path.join(__dirname, 'node_modules', 'shelljs'))
