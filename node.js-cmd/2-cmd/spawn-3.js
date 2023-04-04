const { spawn } = require('child_process')

function run_spawn() {
    return new Promise((resolve, reject) => {
        /**
         * -t 5 表示5秒后超时
         * 
         * 正常的子进程退出码为0
         * 超时的子进程退出码为2
         * 无法解析主机的子进程退出码为68
         */
        let stdout = '', stderr = '', cmderr = ''
        const cmd = spawn('ping', ['-t', '5', 'google.com'])

        cmd.stdout.on('data', (data) => {
            stdout += data
        })

        cmd.stderr.on('data', (data) => {
            stderr += data
        })

        cmd.on('error', (err) => {
            cmderr = err
        })

        cmd.on('close', (code) => {
            if (code == 0) {
              resolve(stdout)
            } else {
              reject({ code, cmderr, stderr, stdout })
            }
        })
    })

}

run_spawn().then((stdout) => {
    console.log(`网络连通成功！`, stdout)
}).catch((error) => {
    console.log(`网络连通失败！`, error)
    console.log(`网络连通失败原因：${error.cmderr || error.stderr || error.stdout}`)
})