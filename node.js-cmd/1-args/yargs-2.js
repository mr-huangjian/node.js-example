
/**
    将参数名的参数值转为指定类型
 */

const yargs = require('yargs');
const argv = yargs.boolean(['online']).argv
console.log(argv.online, typeof(argv.online));

/**
    % node 1.js --online=true
    true boolean

    % node 1.js --online
    true boolean

    node 1.js --online=false
    false boolean

    % node 1.js --online=10
    false boolean

    % node 1.js
    undefined undefined
 */
