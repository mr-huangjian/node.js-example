const fs = require('fs')
const child_process = require('child_process')

for (var i = 0; i < 3; i++) {
    const worker_process = child_process.fork('fork.support.js', [i])
    worker_process.on('close', (code) => {
        console.log(`子进程退出码为：${code}`)
    })
}
