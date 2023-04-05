
/**
    获取命令行参数，参数是 Query 字符串
 */
import QS from 'query-string'

const args = process.argv.slice(2)
const one = args[0]
const obj = QS.parse(one)
for (const key in obj) {
    console.log(`output ${key}: ${obj[key]}`)
}

/**
    % node native-3.mjs 'name=hj&age=20'
    output age: 20
    output name: hj
 */
