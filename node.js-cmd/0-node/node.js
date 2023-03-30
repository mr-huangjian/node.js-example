/**
    % node -v
    v17.8.0

    # 执行单行语句    -e=--eval
    % node -e "console.log(10 + 20); 10 > 20;"
    30

    # 执行单行语句，并输出返回结果    -p=--print
    % node -p "console.log(10 + 20); 10 > 20;"
    30
    false

    # 在不执行的情况下，对脚本进行语法检查    -c=--check
    % node -c node.js

    # 静默一切进程警告（包括废弃警告）
    % node --no-warnings node.js
 */

console.log('---THIS IS NODE.JS FILE---')
10=a // 此处有语法错误
