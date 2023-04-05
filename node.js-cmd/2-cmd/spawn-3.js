const { spawn } = require('child_process')

function run_spawn(command) {
    return new Promise((resolve, reject) => {
        /**
         * -t 5 表示5秒后超时
		 * 设置了超时的命令，可以直接用`exec`方法!
		 * 实时输出用`spawn`方法
         * 
         * 正常的子进程退出码为0
         * 超时的子进程退出码为2
         * 无法解析主机的子进程退出码为68
         */

        let stdout = '', stderr = '', cmderr = ''

		const array = command.split(' ')
        const stream = spawn(array[0], array.slice(1))

        stream.stdout.on('data', (data) => {
            stdout += data
        })

        stream.stderr.on('data', (data) => {
            stderr += data
        })

        stream.on('error', (err) => {
            cmderr = err
        })

        stream.on('close', (code) => {
            if (code == 0) {
              resolve(stdout)
            } else {
              reject({ code, cmderr, stderr, stdout })
            }
        })
    })

}

run_spawn('ping -t 5 google.com').then((stdout) => {
    console.log(`网络连通成功！`, stdout)
}).catch((error) => {
    console.log(`网络连通失败！`, error)
    console.log(`网络连通失败原因：${error.cmderr || error.stderr || error.stdout}`)
})
