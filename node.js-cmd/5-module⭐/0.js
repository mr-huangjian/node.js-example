import path from 'path'
console.log(path)

/**
    Module 的加载实现
        浏览器加载
        ES6 模块与 CommonJS 模块的差异
        Node.js 的模块加载方法

    !! https://es6.ruanyifeng.com/#docs/module-loader
    !! https://www.nodeapp.cn/modules.html
    https://blog.csdn.net/clhdtzhh/article/details/125658895
 */

/**
    在 nodejs 中使用 ES6 的模块语法，有两种办法
    1. 在 package.json 中设置 "type": "module"
    2. 将文件的扩展名改为 .mjs

    亲测以上两种方法都有效，推荐第一种，且 CommonJS 与 ES6 模块语法只能二选一
    Node.js v17.8.0
 */

/**

(node:11565) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs
extension.
(Use `node --trace-warnings ...` to show where the warning was created)
/Users/mr.huangjian/Desktop/nodejs-cmd/test.js:1
import path from 'path'
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1027:15)
    at Module._compile (node:internal/modules/cjs/loader:1063:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)

    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47

Node.js v17.8.0

*/
