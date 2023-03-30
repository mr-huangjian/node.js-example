const { execFile } = require('child_process')

/**
    exec 与 execFile 的区别
    exec        是执行一段完整的命令行语句，会生成一个隐藏的 shell 程序
    execFile    是模拟用户在终端控制台输入一段命令并携带参数，不衍生一个 shell
 */

{
    const child = execFile('node', ['--version'], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      console.log(stdout);
    });
}

{
    const child = execFile('which', ['node'], (error, stdout, stderr) => {
      if (error) {
        throw error;
      }
      console.log(stdout);
    });
}
