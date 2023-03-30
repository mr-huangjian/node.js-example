
/**
    获取指定参数名的参数值
 */

const yargs = require('yargs');
console.log(yargs.argv.name);

/**
    % node 0.js --name hj
    hj

    % node 0.js --name=huangjian
    huangjian
 */
