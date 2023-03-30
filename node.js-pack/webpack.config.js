const path = require('path')

// 需要提供一个绝对路径
let output_path = path.join(__dirname, 'dist')
// output_path = '/Users/imac-pkg-5f/Desktop/exproj/native-server/dist'

module.exports = {
    entry: './index.js',
    target: 'node',
    mode: 'production',
    output: {
        path: output_path,
        filename: 'bundle.js',
    },
};

/**
    执行
    node ./dist/bundle.js
 */
