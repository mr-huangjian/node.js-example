
/**
    获取命令行参数，参数是 JSON 字符串
 */

const args = process.argv.slice(2)
const one = args[0]
console.log(JSON.parse(one))

/**
    % node 2.js '{"name": "hj", "age": 20, "vip": true}'
    { name: 'hj', age: 20, vip: true }
 */
