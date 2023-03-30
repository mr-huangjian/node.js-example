
/**
    获取命令行实际的参数
 */

const args = process.argv.slice(2)
console.log(args)

args.forEach((item, i) => {
    console.log(`${i} ${item} ${typeof(item)}`)
})

/**
    % node 1.js 'hello' 10 true undefined
    [ 'hello', '10', 'true', 'undefined' ]
    0 hello string
    1 10 string
    2 true string
    3 undefined string
 */
